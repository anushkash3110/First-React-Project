
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
    const handleDelete = (id) => {
    fetch('http://localhost:8000/blogs/' + id, {
      method: 'DELETE'
    }).then(() => {
      window.location.reload(); // simple for now
    });
  };
  
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}    
            {blogs && <BlogList blogs={blogs} title = "All Blogs!" handleDelete={handleDelete}/>} 
        </div>
    );
}
 
export default Home;