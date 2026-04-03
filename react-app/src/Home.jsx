const Home = () => {
    let name = 'John Doe';
    
    
    const handleClick = () => {
        name = 'Mily';
    
    }

    return (
        <div className="home">
            <h2>Home</h2>
            <p>name</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}
 
export default Home;