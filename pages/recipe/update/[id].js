/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState, useEffect } from 'react'
import style from "../Create.module.css"
import Head from "next/head";
import Layout from "../../../components/layout/Layout";
import Input from "../../../components/base/Input"
import Textarea from "../../../components/base/Textarea";
import Button from "../../../components/base/Button";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import { useRouter} from 'next/router'
import axios from 'axios'
import Swal from 'sweetalert2';

const Update = () => {
  const router = useRouter()
  const id = router.query.id
  const [dataRecipe, setDataRecipe] = useState({
    title: "",
    ingredients: "",
    image: "",
    video: ""
  })

  console.log('data =>', dataRecipe);

  const [title, setTitle] =  useState("")
  const [videoTitle, setVideoTitle] = useState("")
  const handleChange = (e) => {
    setDataRecipe({
      ...dataRecipe,
      [e.target.name]: [e.target.value]
    })
  }

  const [imagePriview, setImagePriview] = useState("")

  const imageUpload = (e) => {
    const file = e.target.files[0]
    setDataRecipe({
      ...dataRecipe,
      image: file
    })
    setImagePriview(URL.createObjectURL(file))
  }

  const videoUpload = (e) => {
    const file = e.target.files[0]
    setDataRecipe({
      ...dataRecipe,
      video: file
    })
  }

  async function fetchData (dataform, id) {
    try {
      const result = await axios.put(`${process.env.NEXT_APP_API_URL}/recipe/${id}`, dataform, {
        headers: {
          "content-type": "multipart/form-data"
        },
      })
      const recipe = result.data.data
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Update Recipe Success",
        showConfirmButton: false,
        timer: 1500,
      });
      router.push(`/recipe/${id}`)
      console.log('recipes =>',recipe);
    } catch (error) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Update Recipe Success",
        showConfirmButton: false,
        timer: 1500,
      });
      console.log(error);
    }
  }

  const handleUpdateRecipe = (e) => {
    const data = new FormData()
    data.append('title', dataRecipe.title)
    data.append('recipePhoto', dataRecipe.image)
    data.append('ingredients', dataRecipe.ingredients)
    data.append('recipeVideo', dataRecipe.video)
    e.preventDefault()
    fetchData(data, id)
  }

  async function fetchDataId(id){
    try {
      const result = await axios.get(`${process.env.NEXT_APP_API_URL}/recipe/${id}`)
      const recipes = result.data.data
      console.log('recipes =>',recipes[0]);
      setDataRecipe({
        ...dataRecipe,
        title: recipes[0].title,
        ingredients: recipes[0].ingredients
      })
      setImagePriview(recipes.image)
      setVideoTitle(recipes.video)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchDataId(id)
  },[id])
  return (
    <>
      <Layout title='Update Recipe - FoodRecipe'>
        <div className="container mt-5 text-center">
          <form onSubmit={handleUpdateRecipe}>
            <Input
              type={'file'}
              name={'recipe_image'}
              className={style.imgInput}
              onChange={(e)=>imageUpload(e)}
              value={''}
              placeholder={'add photo'}>
            </Input>
            <Input
              className={style.formInput}
              type={'text'}
              name={'title'}
              onChange={handleChange}
              value={dataRecipe.title}
              placeholder={'Title'} />
            <Textarea
              className={style.areaInput}
              name={'ingredients'}
              onChange={handleChange}
              value={dataRecipe.ingredients}
              placeholder={'Ingredients'}>
            </Textarea>
            <Input type={'file'}
              className={style.videoInput}
              name={'recipe_video'}
              onChange={(e)=>videoUpload(e)}
              placeholder={'Video'} 
              value={''}
              />
              
            <Button type='submit' className={style.btnPost}>Post</Button>
          </form>
        </div>
      </Layout>
    </>
  );
};
// export const getServerSideProps = async (context) => {
//   // const cookie = context.req.headers.cookie
//   const { id } = context.params
//   // if (!cookie) {
//   //   // Router.replace('/login')
//   //   context.res.writeHead(302, {
//   //     Location: `http://localhost:3000/auth/login`
//   //   })
//   //   return {}
//   // }
//   const { data: RespData } = await axios.get(`${process.env.NEXT_APP_API_URL}/recipe/${id}`, {
//     headers: {
//     }
//   });
//   // console.log(RespData);
//   return {
//     props: {
//       recipeDetail: RespData.data,
//     }, // will be passed to the page component as props
//   };
// }
export default Update;