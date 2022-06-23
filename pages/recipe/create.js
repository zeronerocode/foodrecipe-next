import style from "./Create.module.css"
import Head from "next/head";
import Layout from "../../components/layout/Layout";
import Input from "../../components/base/Input"
import Textarea from "../../components/base/Textarea";
import Button from "../../components/base/Button";
import {useRouter} from 'next/router'

const Create = () => {
    const router = useRouter()
  return (
    <>
      <Layout title='Add Recipe - FoodRecipe'>
          <div className="container mt-5 text-center">
              <from>
                <Input type={'file'} className={style.imgInput} placeholder={'add photo'}></Input>
                <Input className={style.formInput} type={'text'} placeholder={'Title'} />
                <Textarea className={style.areaInput} placeholder={'Ingredients'}></Textarea>
                <Input type={'file'} className={style.videoInput} placeholder={'Video'} />
                <Button className={style.btnPost}>Post</Button>
              </from>
          </div>
      </Layout>
    </>
  );
};

export default Create;