import style from "./Detail.module.css";
import Head from "next/head";
import Layout from "../../components/layout/Layout";
import { useRouter } from 'next/router'
import Image from "next/image";
import Button from "../../components/base/Button";
import Textarea from "../../components/base/Textarea";
import axios from 'axios'

const RecipeDetail = ({recipeDetail}) => {
    const router = useRouter()
    return (
        <>
            <Layout title='product - tokoku'>
                <div className='container text-center'>
                    <h1 className="text-center">{ recipeDetail.title }</h1>
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
export const getServerSideProps=async(context)=>{
    const cookie = context.req.headers.cookie 
    const {id} = context.params
    if (!cookie ){
      // Router.replace('/login')
      context.res.writeHead(302, {
        Location: `http://localhost:3000/auth/login`
      })
      return {}
    }
    const { data: RespData } = await axios.get(`http://localhost:5000/v1/recipe/${id}`, {withCredentials: true, headers:{
      Cookie:cookie
    }});
    console.log(RespData);
    return {
      props: {
        recipeDetail: RespData.data,
      }, // will be passed to the page component as props
    };
  }
export default RecipeDetail;