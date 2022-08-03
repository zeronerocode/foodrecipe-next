// import style from "../recipe/Detail.module.css";
// import Head from "next/head";
// import Layout from "../../components/layout/Layout";
// import { useRouter } from 'next/router'
// import Image from "next/image";
// import Button from "../../components/base/Button";
// import Textarea from "../../components/base/Textarea";
// import axios from 'axios'

// const StaticRecipeDetail = ({ recipeDetail }) => {
//     const router = useRouter()
//     if (router.isFallback) {
//         return <h3>loading......</h3>
//     }
//     return (
//         <>
//             <Layout title='Detail Recipe - Food Recipe'>
//                 <div className='container text-center'>
//                     <h1 className="text-center">{recipeDetail[0].title}</h1>
//                     <Image className="text-center" src={recipeDetail[0].recipe_photo} width={800} height={600} alt='image' />
//                 </div>
//                 <div className="container mt-5">
//                     <h3>Ingredients</h3>
//                     <p>
//                         {recipeDetail[0].ingredients}
//                     </p>
//                     <h3>Video Step</h3>
//                     <Button className={style.videoButton}>Button</Button> <br />
//                     <Button className={style.videoButton}>Button</Button>
//                     <form>
//                         <Textarea className={style.textArea} rows={'4'} placeholder={'Comment :'}></Textarea>
//                         <Button className={style.buttonSend}>Send</Button>
//                     </form>
//                     <h3 className="mt-5">Comment</h3>
//                 </div>
//             </Layout>
//         </>
//     );
// };

// export async function getStaticPaths(context) {
//     const { data: RespData } = await axios.get(`http://localhost:5000/v1/recipe/`);
//     const paths = RespData.data.map((item) => {
//         return {
//             params: {
//                 id: item.id + ''
//             }
//         }
//     })
//     console.log(paths);

//     return {
//         paths: paths,
//         fallback: true // false or 'blocking'
//     };
// }

// export async function getStaticProps(context) {
//     const id = context.params.id
//     const { data: RespData } = await axios.get(`http://localhost:5000/v1/recipe/${id}`);
//     // setTimeout(()=>{
//     return {
//         props: {
//             recipeDetail: RespData.data
//         }
//     }
//     // }, 2000)


// }
// export default StaticRecipeDetail;