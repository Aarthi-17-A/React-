import React from 'react'
import Post from './components/Post.jsx'
import image1 from './components/images/image1.jpeg'
import image2 from './components/images/image2.jpeg'
import image3 from './components/images/image3.jpeg'


const App = () => {
  return (
    <div>
      <h1>Mini Image feed</h1>
      <Post image={image1} name='Aarthi'/>
      <Post image={image2} name='ankitha'/>
      <Post image={image3} name='bhavani'/>
    </div>
  )
}

export default App
