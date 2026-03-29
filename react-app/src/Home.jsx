const Home = () => {
    
    const handleClick = (e) => {
        console.log('Hello, user!', e);
    }

    const handleClickAgain = (name, e) => {
        console.log('Hello, ' + name, e.target);
    }


    return (
        <div className="home">
            <h2>Home</h2>
            <p>Welcome to the home page!</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain('Anushka', e)}>Click me again</button>
        </div>
    );
}
 
export default Home;