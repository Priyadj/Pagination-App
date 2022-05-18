import React, { useState, useEffect } from 'react';
import './App.css';
import Posts from './Components/Posts';
import Pagination from './Components/Pagination';

const url = 'https://jsonplaceholder.typicode.com/posts';

function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error('something went wrong while requesting posts');
      })
      .then((posts) => setPosts(posts))
      .catch((error) => setError(error.message));
  }, []);

  if (error) return <h1>{error}</h1>;

  
  return (
    <div className="App">
    {posts.length > 0 ? (
      <>
        <Pagination
          data={posts}
          RenderComponent={Posts}
          title="Posts"
          pageLimit={5}
          dataLimit={10}
        />
      </>
    ) : (
     <h1>No Posts to display</h1>
    )}
    </div>
  );
}

export default App;
