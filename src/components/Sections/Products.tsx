import ProductCard from "./ProductCard";
import styles from "./Products.module.scss";

const products = [
  {
    id: "1",
    image: "/hero.png",
    name: "Producto 1",
    description: "Descripción del producto 1",
    price: 100,
  },
  {
    id: "2",
    image: "/hero.png",
    name: "Producto 2",
    description: "Descripción del producto 2",
    price: 200,
  },
  {
    id: "3",
    image: "/hero.png",
    name: "Producto 3",
    description: "Descripción del producto 3",
    price: 300,
  },
];

const Products = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>Lorem ipsum dolor sit.</h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
          optio harum ad aliquid? Labore, fugit?
        </p>
      </div>
      <div className={styles.products}>
        <div className={styles.slider}>
          {products.map((product) => (
            <ProductCard {...product} key={product.id} />
          ))}
        </div>
        <div className={styles.info}>
          <h2 className={styles.productTitle}>Lorem ipsum dolor sit amet.</h2>
          <p className={styles.productDescription}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
            ducimus distinctio magnam laboriosam, voluptate dolorum numquam
            commodi. Laudantium, a tempore.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Products;
