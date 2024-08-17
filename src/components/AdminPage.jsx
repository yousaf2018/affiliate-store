import React, { useEffect, useState } from 'react';
import { addProduct } from '../ImageFunc';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [affiliateLink, setAffiliateLink] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                navigate('/login'); // Redirect to login if not authenticated
            }
        });
        return () => unsubscribe();
    }, [navigate]);

    if (!user) {
        return <p className='loading'>Loading dashboard...</p>;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const productData = {
            name: productName,
            price: price,
            category,
            affiliateLink,
        };

        try {
            await addProduct(productData, imageFile);
            // Clear the input fields after successful product addition
            setProductName('');
            setPrice('');
            setCategory('');
            setAffiliateLink('');
            setImageFile(null);
            setSuccessMessage('Product added successfully!');

            // Hide the success message after 3 seconds
            setTimeout(() => setSuccessMessage(''), 3000);
        } catch (error) {
            console.error('Error adding product:', error);
            setSuccessMessage('Failed to add product.');
        } finally {
            setLoading(false); // Stop loading
        }
    };

    const categories = ['Tops', 'Skirts', 'Trousers/shorts', 'Two Piece', 'Dress/jumpsuit', 'Bags', 'Shoes', 'Jewelries', 'Makeup/cosmetics', 'Eye glasses', 'Hair accessories', 'Beauty gadgets', 'Random free'];

    return (
        <div className='admin'>
            <h2>Add New Product</h2>
            {loading ? (
                <p>Adding new product...</p>
            ) : (
                <>
                    {successMessage && <p className='success'>{successMessage}</p>}
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Product Name"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                        />
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                        >
                            <option value="">Select Category</option>
                            {categories.map((cat) => (
                                <option key={cat} value={cat}>
                                    {cat}
                                </option>
                            ))}
                        </select>
                        <input
                            type="text"
                            placeholder="Affiliate Link"
                            value={affiliateLink}
                            onChange={(e) => setAffiliateLink(e.target.value)}
                            required
                        />
                        <input
                            type="file"
                            onChange={(e) => setImageFile(e.target.files[0])}
                            required
                        />
                        <button type="submit">Add Product</button>
                    </form>
                </>
            )}
        </div>
    );
};

export default AdminPage;
