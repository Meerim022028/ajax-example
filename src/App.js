import { useState } from 'react';
import './App.css';
import FullPost from './components/FullPost/FullPost';
import Posts from './components/Posts/Posts';
import Author from './components/Author/Author';
import Comments from './components/Comments/Comments';


function App() {
  const [selectedPost, setSelectedPost] = useState(0);

  
  return (
    <div className="App">
      <FullPost id={selectedPost} />
      <Posts setSelectedPost={setSelectedPost} />
      <Comments />
      <Author />

    </div>
  );
}
export default App;