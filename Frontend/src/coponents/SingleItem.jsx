import React from 'react'
import { Link } from 'react-router-dom';

const PostItem = ({item}) => {
  const {date,id,image,title} = item;

  return (
    <div  className='postItem-con '>
      <Link to={`/single-post/${id}`}>
        <img src={image} alt={title} />
      </Link>
      <div className='info-con'>
        <h2>{title}</h2>
        <p>*{date}</p>
      </div>
    </div>
  )
}

export default PostItem;