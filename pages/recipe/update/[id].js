import React, { useCallback, useState, useEffect } from 'react'
import style from "../Create.module.css"
import Head from "next/head";
import Layout from "../../../components/layout/Layout";
import Input from "../../../components/base/Input"
import Textarea from "../../../components/base/Textarea";
import Button from "../../../components/base/Button";
import Tiptap from '../../../components/base/Tiptap';
import { useRouter } from 'next/router'
import axios from 'axios'

const Update = (recipeDetail) => {
  const router = useRouter()
  const [files, setFiles] = useState([])
  const [video, setVideo] = useState('')
  const [image, setImage] = useState('')
  const [recipe, setRecipe] = useState({
    title: '',
    ingredients: ''
  })
  const {id} = recipeDetail.recipeDetail[0]
  const resep = recipeDetail.recipeDetail[0]
  // image = recipeDetail.recipeDetail[0].recipe_photo
  // video = recipeDetail.recipeDetail[0].recipe_video
  console.log("resep update=>",resep)
  console.log("image => ", image);
  const hanldeImageUpload = (e) => {
    console.log(e.target.files[0]);
    let upload = e.target.files[0]
    setImage(upload)
  }

  const handleVideoUpload = (e) => {
    console.log(e.target.files[0]);
    let upload = e.target.files[0]
    setVideo(upload)
  }

  const handleInput = (e) => {
    e.persist();
    setRecipe({ ...recipe, [e.target.name]: e.target.value })
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    let formData = new FormData()
    formData.append('recipePhoto', image)
    formData.append('recipeVideo', video)

    formData.append('title', recipe.title)
    formData.append('ingredients', recipe.ingredients)

    try {
      const result = await axios.put(`${process.env.NEXT_APP_API_URL}/recipe/${id}`, formData)
      router.push(`/`)
    } catch (error) {

    }
  }

  return (
    <>
      <Layout title='Update Recipe - FoodRecipe'>
        <div className="container mt-5 text-center">
          <form onSubmit={handleSubmit}>
            <Input
              type={'file'}
              name={'recipe_image'}
              className={style.imgInput}
              onChange={hanldeImageUpload}
              defaultValue={image || ''}
              placeholder={'add photo'}>
            </Input>
            <Input
              className={style.formInput}
              type={'text'}
              name={'title'}
              onChange={handleInput}
              defaultValue={resep.title}
              placeholder={'Title'} />
            <Textarea
              className={style.areaInput}
              name={'ingredients'}
              onChange={handleInput}
              defaultValue={resep.ingredients}
              placeholder={'Ingredients'}>
            </Textarea>
            <Input type={'file'}
              className={style.videoInput}
              name={'recipe_video'}
              onChange={handleVideoUpload}
              placeholder={'Video'} 
              defaultValue={resep.recipe_video || ''}
              />
              
            <Button type='submit' className={style.btnPost}>Post</Button>
          </form>
        </div>
      </Layout>
    </>
  );
};
export const getServerSideProps = async (context) => {
  const cookie = context.req.headers.cookie
  const { id } = context.params
  if (!cookie) {
    // Router.replace('/login')
    context.res.writeHead(302, {
      Location: `http://localhost:3000/auth/login`
    })
    return {}
  }
  const { data: RespData } = await axios.get(`${process.env.NEXT_APP_API_URL}/recipe/${id}`, {
    withCredentials: true, headers: {
      Cookie: cookie
    }
  });
  // console.log(RespData);
  return {
    props: {
      recipeDetail: RespData.data,
    }, // will be passed to the page component as props
  };
}
export default Update;