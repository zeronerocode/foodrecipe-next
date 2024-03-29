import React, { useCallback, useState, useEffect } from 'react'
import style from "./Create.module.css"
import Head from "next/head";
import Layout from "../../components/layout/Layout";
import Input from "../../components/base/Input"
import Textarea from "../../components/base/Textarea";
import Button from "../../components/base/Button";
import { useRouter } from 'next/router'
import axios from 'axios'
import Swal from 'sweetalert2';

const Create = () => {
  const router = useRouter()
  const [files, setFiles] = useState([])
  const [video, setVideo] = useState([])
  const [image, setImage] = useState([])
  const [recipe, setRecipe] = useState({
    title: '',
    ingredients: ''
  })

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

  const handleSubmit = async (e) =>{
    e.preventDefault()
    let formData = new FormData()
    formData.append('recipePhoto', image)
    formData.append('recipeVideo', video)

    formData.append('title', recipe.title)
    formData.append('ingredients', recipe.ingredients)

    try {
      const result = await axios.post(`${process.env.NEXT_APP_API_URL}/recipe/`,formData)
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Add Recipe Success",
        showConfirmButton: false,
        timer: 1500,
      });
      router.push(`/`)
    } catch (error) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Add Recipe Failed",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }

  return (
    <>
      <Layout title='Add Recipe - FoodRecipe'>
        <div className="container mt-5 text-center">
          <form onSubmit={handleSubmit}>
            <Input
              type={'file'}
              name={'recipe_image'}
              className={style.imgInput}
              onChange={hanldeImageUpload}
              placeholder={'add photo'}>
            </Input>
            <Input
              className={style.formInput}
              type={'text'}
              name={'title'}
              onChange={handleInput}
              placeholder={'Title'} />
            <Textarea
              className={style.areaInput}
              name={'ingredients'}
              onChange={handleInput}
              placeholder={'Ingredients'}>
            </Textarea>
            <Input type={'file'}
              className={style.videoInput}
              name={'recipe_video'}
              onChange={handleVideoUpload}
              placeholder={'Video'} />
            <Button type='submit' className={style.btnPost}>Post</Button>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Create;