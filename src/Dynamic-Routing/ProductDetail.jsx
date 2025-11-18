import React from 'react'
import { useParams } from 'react-router-dom'
import { FaBoxOpen } from "react-icons/fa6";

const ProductDetail = () => {
    const {id} = useParams();
  return (
    <div>
      <h2><FaBoxOpen />Product id:{id}</h2>
    </div>
  )
}

export default ProductDetail
