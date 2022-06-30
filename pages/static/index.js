import Head from "next/head";
import Layout from "../../components/layout/Layout";
import { useRouter } from 'next/router'
import Image from "next/image";
import axios from 'axios'

const StaticRecipe = ({recipes}) => {
  const router = useRouter()
  const handleClick = (id) => {
    router.push(`/static/${id}`)
  } 
  // useEffect(() => {
  //   const fetch = async () => {
  //     const result = await axios.get('http://localhost:5000/v1/recipe/')
  //     setData(result.data)
  //     setRecipe(result.data.data)
  //     console.log(recipe);
  //   }
  //   fetch()
  // }, [])
  return (
    <>
      <Layout title='Home - FoodRecipe'>
        <div className={'container'}>
          <h1>Popular StaticRecipe</h1>
          <div className="row">
            {!recipes ? <h3>loading</h3> : recipes.map((r, id) => (
              <div className="col-md-4" key={id}  onClick={() => handleClick(r.id)}>
                <Image src={r.recipe_photo} width={500} height={500} alt='image' />
                <h1>{r.title}</h1>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};
export const getStaticProps =async()=> {
    const { data: RespData } = await axios.get("http://localhost:5000/v1/recipe");
    return {
        props:{
            recipes: RespData.data
        }
    }
}

export default StaticRecipe;