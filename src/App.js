import './App.css';
import Navbar from './component/navbar';
import ProductList from './component/ProductList';
import React,{useState} from 'react';
import Footer from './component/Footer'
import Addcomp from './component/Addcomp';

function App() {
  
  const products = [
    {
      price: 199969,
      name: "I-Phone 15", 
      quantity: 0 ,
      
    },
    {
      price: 132345,
      name: "I-Phone 14", 
      quantity: 0 ,
      
    },
    {
      price: 99999,
      name: "I-Phone 13", 
      quantity: 0 ,
      
    }
    
  ];
  
  let [ productList , setproductlist ] = useState(products);
  
  let [ amt , setamt ] = useState(0);
  

  const increment = (index ) =>{
    let arr = [...productList];
    let newamt = amt ; 
    arr[index].quantity++;
    newamt += arr[index].price;
    setamt(newamt);
    setproductlist(arr);
  };

  const decrement = (index) => {
    let arr = [...productList];
    let newamt = amt ; 
    if(arr[index].quantity > 0){
      newamt -= arr[index].price;
      arr[index].quantity--;
    }
    setamt(newamt);
    setproductlist(arr);
    
  };
  
  const resetquant = () => {
    let newProductList = [...productList];
    newProductList.map((products) => {
      return products.quantity = 0;
    });
    setproductlist(newProductList);
    setamt(0);
  };

  const removeItem = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = amt;
    newTotalAmount -=
      newProductList[index].quantity* newProductList[index].price;
    newProductList.splice(index, 1);
    setproductlist(newProductList);
    setamt(newTotalAmount);
  };

  const additem = (itemname , price ) =>{
    let newProductList = [...productList];
    newProductList.push({
      price:price , 
      name: itemname,
      quantity: 0

    });

    setproductlist(newProductList);
  };



  return (
    <>
    <Navbar/>
    <Addcomp additem={additem}/>
    <main className='container mt-5 '>
    <ProductList productList={productList} increment= {increment} decrement = {decrement}  removeItem={removeItem}/>
    </main>
    <Footer amt={amt } resetquant={resetquant}/>
    </>
  );
}

export default App;
