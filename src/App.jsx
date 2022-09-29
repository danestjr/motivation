import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [content, setContent] = useState({})
  
  useEffect(()=> {
    // Pull in the API from here
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => setContent(data)) 
  }, []);
    //set an empty array as second argument to execute on first mount and prevent infinte loop

  return (
      <div>
        <div className="container quote">
           <div className="row justify-content-center">
            <div className="col mt-1">
              <h1>Today's Quote</h1> 
            </div>
       <h3> {content.content} </h3>
       <p> -{content.author}</p>
      <br />
      <div className="footer">
        <p><a href="http://github.com/estradacodes/">@estradacodes</a></p>       
      </div>
      </div>
      </div>
      </div>
  );
}

export default App
