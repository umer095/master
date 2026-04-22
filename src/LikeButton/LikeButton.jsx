import React, { useState } from 'react'

const LikeButton = () => {
   const [ like , setLike] = useState(false);

   const clicked =() => {
      setLike(!like);
   }

   let likeStyle ={color:"red"};
  return (
   <>
    <p onClick={clicked}>
      {like ? <i className="fa-solid fa-heart"style={likeStyle}></i> 
         : <i className="fa-regular fa-heart"></i> 
      }
    </p>
      
   </>
  )
}

export default LikeButton
