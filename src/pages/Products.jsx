import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function Products() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(json => {
                setProducts(json.products)
              })
    }, [])
    return (
        <div>
          {
            products.map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  img={product.images[0]}
                  title={product.title}
                  price={product.price} />
              )
            })
          }
        </div>
    )
}