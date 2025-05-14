import { useEffect, useState } from "react";

const Products = () => {
    const [products, setProducts] = useState([]);
    // load data
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then((res) => res.json())
            .then((data) => setProducts(data.products));
    }, [])
    return (
        <div>
            <h2>All Products</h2>
            <section>
                {/* conditional listing */}
                {products && products.length > 0 && products.map(product => {
                    return <article key={product.id}>
                        <h2>{product.title}</h2>
                        <p className="p-2">{product.category}</p>
                        <p>{product.price}</p>
                        <p>{product.description}</p>
                    </article>
                })}
            </section>
        </div>
    );
};

export default Products;