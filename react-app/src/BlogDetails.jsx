import { useParams } from "react-router-dom";
import useFetch from "./useFetch";


const BlogDetails = () => {
    const { id } = useParams();
    const {data: blog, error, isPending} = useFetch('http://localhost:8000/blogs/' + id);

    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.content}</div>
                    <div className="blog-meta">
                        <p className="blog-date">Publish date: {blog.date}</p>
                    </div>

                </article>
            )}
        </div>
    );
}

export default BlogDetails;  