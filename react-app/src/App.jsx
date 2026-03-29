import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
 // const person = { name: 'Anushka', age: 25 };  we can not use this,bcs it is an object and we can not render an object directly in JSX, we need to convert it to a string or use its properties to render <it className=""></it>

  return (
    <div className="App">
      <Navbar />    
      <div className="content">
        <Home />

      
      </div>
    </div>
  )
}

export default App;
