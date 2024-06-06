import Link from 'next/link';


const Card = ({ blog }) => {

    const showBlogCategories = blog =>
        blog.categories.map((c, i) => (
            <div key={i} className='bg-white mb-10 text-black border border-[grey] m-3 hover:scale-105 transition-transform font-bold rounded py-2 px-3'> <Link href={`/categories/${c.slug}`}>{c.name}</Link></div>
        ))

    const formattedDate = blog.formattedDate;

    return (

        <div>
            <Link href={`/${blog.slug}`}></Link>
            <Link href={`/${blog.slug}`}><img src={blog.photo} alt={blog.title} className='h-[200px] w-[350px] object-cover' /></Link>
            <header><h2 className='text-center text-2xl py-5 font-bold px-2'><Link className='hover:underline' href={`/${blog.slug}`}>{blog.title}</Link></h2></header>
            <section className='text-center mb-5 px-2'>
                {formattedDate} &nbsp; by &nbsp;
                {blog.postedBy && blog.postedBy.name && blog.postedBy.username ? (
                    <Link className='hover:underline' href={`/profile/${blog.postedBy.username}`} > {blog.postedBy.name}</Link>) : (<span>User</span>)}
            </section>

            <div className='flex flex-wrap justify-center'> {showBlogCategories(blog)}</div>
        </div>

    );
};

export default Card;