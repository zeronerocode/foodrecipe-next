import styles from "../../styles/Home.module.css";
import Head from "next/head";
import Layout from "../../components/layout/Layout";
import {useRouter} from 'next/router'

const Product = () => {
    const router = useRouter()
  return (
    <>
      <Layout title='Home - FoodRecipe'>
        <div className={styles.container}>
          <h1>page product</h1>
          <button className="btn btn-primary" onClick={()=>router.push('/home')}>pindah ke home</button>
        </div>
      </Layout>
    </>
  );
};

export default Product;