import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import { listBlogsWithCategoriesAndTags } from "../actions/blog";
import Card from "@/components/Card";
import { format, utcToZonedTime } from 'date-fns-tz';
import { APP_NAME, APP_DESCRIPTION, DOMAIN } from "@/config";

const Home = ({ blogs }) => {
  const showAllBlogs = () => {
    return blogs && blogs.map((blog, i) => (
      <article className=" w-[340px] mx-auto my-8 md:mx-6 rounded bg-white border border-gray-300 hover:scale-105 transition-transform" key={i}><Card blog={blog} /></article>
    )).slice(0, 9);
  }


  const head = () => (
    <Head>
      <title >{APP_NAME}</title>
      <meta name="description" content={APP_DESCRIPTION} />
      <link rel="canonical" href={DOMAIN} />
      <meta property="og:title" content={APP_NAME} />
      <meta property="og:description" content={APP_DESCRIPTION} />
      <meta property="og:type" content="webiste" />
      <meta name="robots" content="index, follow" />
      <meta property="og:url" content={DOMAIN} />
      <meta property="og:site_name" content={DOMAIN} />
      <meta property="og:image" content={`${DOMAIN}/icon-512.png`} />
      <meta property="og:image:secure_url" content={`${DOMAIN}/icon-512.png`} />
      <meta property="og:image:type" content="image/jpg" />
    </Head>
  );

  return (
    <>
      {head()}
      <Navbar />

      <div className=" dark:bg-[#10141c] dark:text-[#cecdcd]">
        <div className=" max-w-[1250px] flex px-3 gap-5 md:mt-10 mt-3 pb-5 justify-center mx-auto flex-wrap">{showAllBlogs()}</div>
      </div>

      <Footer />
    </>
  );
}


export async function getStaticProps() {
  try {
    const data = await listBlogsWithCategoriesAndTags();
    const formattedBlogs = data.blogs.map(blog => {
      const utcDate = new Date(blog.date);
      const istDate = utcToZonedTime(utcDate, 'Asia/Kolkata');
      const formattedDate = format(istDate, 'dd MMM, yyyy', { timeZone: 'Asia/Kolkata' });
      return { ...blog, formattedDate };
    });
    return { props: { blogs: formattedBlogs } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { blogs: [] } };
  }
}




export default Home;