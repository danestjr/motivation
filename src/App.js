/**
 * @author Daniel Estrada <daniel@estradacodes.com>
 */

import React, { useEffect, useState } from 'react';
import './App.css';

 
function App () {
  const [content, setContent] = useState({})

  useEffect(()=> {
    // Pull in the API from here
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => setContent(data)) 
  }, []);
  //set an empty array as second argument to execute on first mount and prevent infinte loop

  return(
    <div>
      <div className="container quote">
         <div className="row justify-content-center">
          <div className="col mt-1">
            <h1>Today's Quote</h1> 
          </div>
     <h3> {content.content} </h3>
     <p> -{content.author}</p>
    <br />
    <div className="sharethis-inline-share-buttons"></div>
    <div className="footer">
      Motivation App created with React, by <a href="http://www.github.com/dcge-studio">@dcge-studio</a>
    </div>
    </div>
    </div>
    </div>
  );
}



export default App;