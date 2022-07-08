import Image from 'next/image'
import styles from './ProductCard.module.scss'

const ProductCard = ({ image, id, name }: any) => {
  return (
    <article id={id} className={styles.product}>
      <Image src={image} alt={name} width={200} height={300} />
    </article>
  )
}
export default ProductCard
