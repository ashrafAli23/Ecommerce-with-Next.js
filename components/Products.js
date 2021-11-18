import Image from 'next/image';
import Style from '../styles/Products.module.css';
import Link from 'next/link';

function Product(props) {
    let {product} = props;
    return (
        <div className={Style.product}>
            <div className='image'>
                <Image src={product.image} width='150' height='180'/>
            </div>
            <ul>
                <li>{product.title}</li>
                <li>{product.price}$</li>
            </ul>
            <Link href={`/products/${product.id}`}>
                more details
            </Link>
        </div>
    )
}

export default Product;
