import Head from 'next/head';
import Image from 'next/image';
import Style from '../../styles/Products.module.css'

function productID(props) {
    const { product } = props;
    return (
        <div className={Style.main + ' container'}>
        <Head>
            <title>{product.title}</title>
        </Head>
        <div className={Style.product}>
            <div><Image src={product.image} width='300' height='350' /></div>
            <h2>{product.category}</h2>
            <h3>{product.price}$</h3>
        </div>
        </div>
    )
}


export async function getStaticPaths(){
    const requests = await fetch("https://fakestoreapi.com/products");
    const data = await requests.json();
    const paths = data.map(req => {
        return{
            params: { id: req.id.toString()}
        }
    })
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps(context){
    const {params} = context;
    const req = await fetch("https://fakestoreapi.com/products/" + params.id)
    const product = await req.json();
    return {
        props: {
            product,
        }
    }
}
export default productID;
