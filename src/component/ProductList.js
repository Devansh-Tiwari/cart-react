
import React from 'react'
import Product from './Product'
export default function ProductList(props) {
    // console.log(props)
  return (
      props.productList.length > 0 ? 
       props.productList.map((product , i ) =>{
        return <Product product= {product} key={i} increment = {props.increment} index={i}  decrement = {props.decrement} removeItem={props.removeItem} />
       })
      : <h1>No Element in the Cart </h1>

  )
}
