// CategoryPage.jsx
import React, { useEffect, useState } from 'react';
import { db, collection, getDocs } from '../firebase';
import { useParams } from 'react-router-dom';

const CategoryPage = () => {
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            if (!category) {
                console.error('Category is undefined');
                setError('Category is undefined');
                setLoading(false);
                return;
            }

            try {
                const productsCollection = collection(db, 'products');
                const querySnapshot = await getDocs(productsCollection);
                const productList = querySnapshot.docs
                    .map(doc => ({ id: doc.id, ...doc.data() }))
                    .filter(product => product.category && product.category.toLowerCase() === category.toLowerCase());
                setProducts(productList);
            } catch (error) {
                console.error('Error fetching products:', error);
                setError('Failed to load products. Please check your network connection.');
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, [category]);

    if (loading) {
        return <p className='loading'>Loading products...</p>;
    }

    if (error) {
        return <p className='error'>{error}</p>;
    }

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return (
        <div className='category-page'>
            <h1>{capitalizeFirstLetter(category)}</h1>
            {products.length > 0 ? (
                <div className='product-list'>
                    {products.map(product => (
                        <div key={product.id} className='product-card'>
                            <a
                                href={product.affiliateLink.startsWith('http') ? product.affiliateLink : `http://${product.affiliateLink}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            ><img src={product.imageUrl} alt="Product display" loading="lazy" /></a>
                            <h2>{product.name}</h2>
                            <p>${product.price}</p>
                            <a
                                href={product.affiliateLink.startsWith('http') ? product.affiliateLink : `http://${product.affiliateLink}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >Buy Now</a>
                        </div>

                    ))}
                </div>
            ) : (
                <p>Items will be added soon!</p>
            )
            }
        </div>
    );
};

export default CategoryPage;
