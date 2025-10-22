import React, { useState } from 'react'

const Post = (props) => {
    //console.log(props)
    const[Likes, setlikes]=useState(0)
    
    function handlelikes(){
       setlikes(Likes+1)
       console.log(Likes)
    }
  return (
    
    <div>
        <img src={props.image}></img>
        <h1>{props.name}</h1>
      <button onClick={handlelikes}>💗Like({Likes})</button>
    </div>
  )
}

export default Post
