import React, { useEffect, useRef, useState } from 'react';
import ProductCard from '../components/ProductCard';

const Home = ()=>{
    const [products,setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const categoryRows = useRef({});

    const scrollCategory = (category, direction) => {
        categoryRows.current[category]?.scrollBy({
            left: direction * 320,
            behavior: 'smooth'
        });
    };

    useEffect(()=>{
        const fetchProducts = async () =>{
            try{
                const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
                const res = await fetch(`${apiUrl}/api/products`);
                if (!res.ok) {
                    throw new Error(`Products request failed: ${res.status}`);
                }
                const data = await res.json();
                setProducts(Array.isArray(data) ? data : []);
            }
            catch (error){
                console.error(error);
                setProducts([]);
            }
            finally{
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const productsByCategory = products.reduce((groups, product) => {
        const category = product.category || 'Featured';
        if (!groups[category]) groups[category] = [];
        groups[category].push(product);
        return groups;
    }, {});

    return (
        <div className="home-container">
          <div className="hero-banner">
            <h1>Welcome to Shopify</h1>
            <p>Discover the best products at unbeatable prices.</p>
          </div>
          {loading ?(
            <div>Loading...</div>
          ): (
                        <div className="category-rails">
                            {Object.entries(productsByCategory).map(([category, categoryProducts]) => (
                                <section className="category-rail" key={category}>
                                    <div className="category-heading">
                                        <h2>{category}</h2>
                                        <span>{categoryProducts.length} products</span>
                                    </div>
                                    <div className="rail-wrapper">
                                        <button
                                            type="button"
                                            className="rail-arrow rail-arrow-left"
                                            aria-label={`Scroll ${category} products left`}
                                            onClick={() => scrollCategory(category, -1)}
                                        >
                                            &#8249;
                                        </button>
                                        <div
                                            className="product-rail"
                                            ref={(element) => { categoryRows.current[category] = element; }}
                                        >
                                            {categoryProducts.map((product) => (
                                                <ProductCard key={product._id} product={product} />
                                            ))}
                                        </div>
                                        <button
                                            type="button"
                                            className="rail-arrow rail-arrow-right"
                                            aria-label={`Scroll ${category} products right`}
                                            onClick={() => scrollCategory(category, 1)}
                                        >
                                            &#8250;
                                        </button>
                                    </div>
                                </section>
                            ))}
                        </div>
                    )}
        </div>
    );
};
export default Home;