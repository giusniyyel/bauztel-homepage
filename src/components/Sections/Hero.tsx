import styles from "./Hero.module.scss";
import Image from "next/image";
const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <h1 className={styles.title}>Descubre café Bauztel</h1>
          <p className={styles.description}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Reprehenderit voluptas fugit aliquid quos rerum nam officia, dolor
            temporibus ipsam. Cumque nemo ad commodi enim rem animi quasi minima
            sapiente, sint
          </p>
          <button className={styles.button}>Comprar ya!</button>
        </div>
        <Image
          src="/hero.png"
          height={500}
          width={300}
          objectFit="contain"
          layout="fixed"
          className={styles.image}
          alt="Café Bauztel"
        />
      </div>
      <ul className={styles.features}>
        <Feature count={10} name="Molido" />
        <Feature count={10} name="Gourmet" />
        <Feature count={10} name="Tostado" />
      </ul>
    </section>
  );
};

const Feature = ({ count, name }: any) => (
  <li className={styles.item}>
    <span className={styles.count}>{count}</span>
    <span className={styles.name}>{name}</span>
  </li>
);
export default Hero;
