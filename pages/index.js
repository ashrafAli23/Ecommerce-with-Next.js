import Product from "../components/Products";
import Head from 'next/head';

export default function index(props) {

  const {products} = props;
  return (
    <div className='container'>
      <Head>
        <title>Ecommerce | best sales</title>
      </Head>
      <div className='main'>
        {
          products.map(product => <Product key={product.id} product={product}/>)
        }
      </div>
    </div>
  )
}


export async function getStaticProps(){
  const req = await fetch("https://fakestoreapi.com/products");
  const products = await req.json();
  return {
    props: {
      products
    }
  }
}
