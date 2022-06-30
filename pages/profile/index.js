import Head from "next/head";
import Layout from "../../components/layout/Layout";
import style from "./Profile.module.css"
import { useRouter } from 'next/router'
import Image from "next/image";
import Link from "next/link";

const Create = () => {
    const router = useRouter()
    return (
        <>
            <Layout title='Profile - FoodRecipe'>
                <div className="container mt-5 text-center">
                    <Image src={'/assets/img/profile.png'} width={'170'} height={'170'} alt={'profile'} />
                    <h2>Garneta Sharina</h2>
                    <hr style={{ width: "25%" }} />
                </div>
                <div className="container">
                    <ul className={style.links}>
                        <li>
                            <Link href="/home">Home</Link>
                        </li>
                        <li>
                            <Link href="/recipe/create">Add Recipe</Link>
                        </li>
                        <li>
                            <Link href="/profile">Profile</Link>
                        </li>
                    </ul>
                    <hr />
                    <div className="row">
                        <div className="col-md-4">
                            <Image src={'/assets/img/food-1.png'} width={500} height={500} alt='image' />
                        </div>
                        <div className="col-md-4">
                            <Image src={'/assets/img/food-2.png'} width={500} height={500} alt='image' />
                        </div>
                        <div className="col-md-4">
                            <Image src={'/assets/img/food-3.png'} width={500} height={500} alt='image' />
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Create;