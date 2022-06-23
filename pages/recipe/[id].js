import style from "./Detail.module.css";
import Head from "next/head";
import Layout from "../../components/layout/Layout";
import { useRouter } from 'next/router'
import Image from "next/image";
import Button from "../../components/base/Button";
import Textarea from "../../components/base/Textarea";

const Product = () => {
    const router = useRouter()
    return (
        <>
            <Layout title='product - tokoku'>
                <div className='container text-center'>
                    <h1 className="text-center">Lorem Sandwich</h1>
                    <Image className="text-center" src={'/assets/img/sandwich.png'} width={1000} height={700} alt='image' />
                </div>
                <div className="container mt-5">
                    <h3>Ingredients</h3>
                    <p>
                        - 2 eggs <br/>
                        - 2 tbsp mayonnaise <br/>
                        - 3 slices bread <br/>
                        - a little butter <br/>
                        - ⅓ carton of cress <br/>
                        - 2-3 slices of tomato or a lettuce leaf
                        and a slice of ham or cheese <br/>
                        - crisps , to serve <br/>
                    </p>
                    <h3>Video Step</h3>
                    <Button className={style.videoButton}>Button</Button> <br/>
                    <Button className={style.videoButton}>Button</Button>
                    <form>
                        <Textarea className={style.textArea} rows={'4'} placeholder={'Comment :'}></Textarea>
                        <Button className={style.buttonSend}>Send</Button>
                    </form>
                    <h3 className="mt-5">Comment</h3>
                </div>
            </Layout>
        </>
    );
};

export default Product;