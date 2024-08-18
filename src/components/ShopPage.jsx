import React from 'react';
import { Link } from 'react-router-dom';
import getImageUrl from './../utils'

const categories = [
    { name: 'Tops', route: '/category/tops', image: 'shopPage/shopTops.png' },
    { name: 'Skirts', route: '/category/skirts', image: 'shopPage/shopSkirts.png' },
    { name: 'Trousers/shorts', route: '/category/trousers&shorts', image: 'shopPage/shopPants.png' },
    { name: 'Two Piece', route: '/category/two Piece', image: 'shopPage/shopTwoP.png' },
    { name: 'Dress/jumpsuit', route: '/category/dress&jumpsuit', image: 'shopPage/shopDress.png' },
    { name: 'Bags', route: '/category/bags', image: 'shopPage/shopBag.png' },
    { name: 'Shoes', route: '/category/shoes', image: 'shopPage/shopShoes.png' },
    { name: 'Jewelries', route: '/category/jewelries', image: 'shopPage/shopJew.png' },
    { name: 'Makeup/cosmetics', route: '/category/makeup&cosmetics', image: 'shopPage/shopMakeup.png' },
    { name: 'Eye glasses', route: '/category/eye glasses', image: 'shopPage/shopEyeglass.png' },
    { name: 'Hair accessories', route: '/category/hair accessories', image: 'shopPage/shopHair.png' },
    { name: 'Beauty gadgets', route: '/category/beauty gadgets', image: 'shopPage/shopGadgets.png' },
    { name: 'Random free', route: '/category/random free', image: 'homePage/logo.png' },

];

const ShopPage = () => {
    return (
        <div className='shop'>
            <h1>Shop by Category</h1>
            <div className="category-list">
                {categories.map(category => (
                    <div key={category.name} className="category-item">
                        <Link to={category.route}><img src={getImageUrl(category.image)} alt="images" loading='lazy' /></Link>
                        <Link to={category.route}>{category.name}</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShopPage;
