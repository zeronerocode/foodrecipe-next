import style from "./Detail.module.css";
import Head from "next/head";
import Layout from "../../components/layout/Layout";
import { useRouter } from "next/router";
import Image from "next/image";
import Button from "../../components/base/Button";
import Textarea from "../../components/base/Textarea";
import axios from "axios";
import Swal from "sweetalert2";

const RecipeDetail = ({ recipeDetail }) => {
  const router = useRouter();
  const handleClick = (id) => {
    router.push(`/recipe/update/${id}`);
  };
  const handleDelete = (id) => {
    axios
      .delete(`${process.env.NEXT_APP_API_URL}/recipe/${id}`)
      .then((res) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Delete Recipe Success",
          showConfirmButton: false,
          timer: 1500,
        });
        router.push(`/`);
      })
      .catch((err) => {
        alert("error");
      });
  };
  return (
    <>
      <Layout title="Detail Recipe - Food Recipe">
        <div className="container text-center">
          <h1 className="text-center">{recipeDetail[0].title}</h1>
          <Image
            className="text-center"
            src={recipeDetail[0].recipe_photo}
            width={800}
            height={500}
            alt="image"
          />
          <div>
            <Button
              className={"btn btn-danger"}
              onClick={() => handleDelete(recipeDetail[0].id)}
            >
              Delete
            </Button>
            <Button
              className={"btn btn-success"}
              onClick={() => handleClick(recipeDetail[0].id)}
            >
              Edit
            </Button>
          </div>
        </div>
        <div className="container mt-5">
          <h3>Ingredients</h3>
          <p>{recipeDetail[0].ingredients}</p>
          <h3>Video Step</h3>
          <Button className={style.videoButton}>Button</Button> <br />
          <Button className={style.videoButton}>Button</Button>
          <form>
            <Textarea
              className={style.textArea}
              rows={"4"}
              placeholder={"Comment :"}
            ></Textarea>
            <Button className={style.buttonSend}>Send</Button>
          </form>
          <h3 className="mt-5">Comment</h3>
        </div>
      </Layout>
    </>
  );
};
export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const { data: RespData } = await axios.get(
    `${process.env.NEXT_APP_API_URL}/recipe/${id}`,
    { headers: {} }
  );
  console.log(RespData);
  return {
    props: {
      recipeDetail: RespData.data,
    }, // will be passed to the page component as props
  };
};
export default RecipeDetail;
