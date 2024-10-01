// // // 'use client'
// // // import axios  from 'axios'
// // // import React, { useState } from 'react'

// // // export default function Todopage() {
// // //     interface todotype {
// // //         id:number,
// // //         todo:string,
// // //         completed:string,
// // //         userId:number
// // //     }
// // //     //'https://dummyjson.com/todos'
// // //     const [todo,setTodo] = useState<todotype[]>([])
    
// // //     const gettodos = async()=>{
// // //         try {
// // //       const resullt  =  await axios.get('https://dummyjson.com/todos')
// // //             console.log('Data comes from Api',resullt.data.todos);
// // //             setTodo(resullt.data.todos)
// // //         } catch (error) {
// // //             console.log('error',error);
            
// // //         }
// // //     }
// // //   return (
// // //     <>
// // //     <div>
// // //       Hello you come on todo page 
// // //     </div>
// // //     <button className='bg-slate-400' onClick={gettodos}>Get Todos</button>
// // //     {todo.map((todoes,index)=>{
// // //         return(
// // //            <div key={index}>
// // //           <h1>{todoes.id} - {todoes.todo}</h1>
// // //            </div>
// // //         )
// // //     })}
// // //     </>
// // //   )
// // // }

// // 'use client'
// // import axios from 'axios';
// // import React, { useState } from 'react'

// // export default function Products() {
// //     // https://fakestoreapi.com/products
// //     const [product,setproduct] = useState([])
// //     const getProductsWithApi = async() =>{
// //         try {
// //          const ProductData =   await axios.get(' https://fakestoreapi.com/products')
// //             console.log('E-commerce store data here',ProductData.data);
// //             setproduct(ProductData.data)
// //         } catch (error) {
// //             console.log('data not found',error);
            
// //         }
// //     }    
// //   return (
// //   <>
// //    <h1>Welcome to Royal E-commerce Store</h1>
// //    <button onClick={getProductsWithApi} className='bg-slate-400'>Ecommerece Data</button>
// //    {product.map((data)=>{
// //     return(
// //         <ul className='flex flex-col gap-2'>
// //         <li>
// //           <div className="max-w-xl rounded overflow-hidden shadow-lg bg-white p-4">
// //             <img className="w-full h-48 object-cover" src={data.image} alt="Product Image" />
// //             <div className="px-6 py-4">
// //               <h2 className="font-bold text-xl mb-2">Product Title: {data.title}</h2>
// //               <p className="text-gray-700 text-base">Description: {data.description}</p>
// //             </div>
// //             <div className="px-6 pt-4 pb-2">
// //               <span className="block text-gray-900 font-semibold">Category: {data.category}</span>
// //               <span className="block text-gray-900 font-semibold">Price: {data.price}</span>
// //             </div>
// //           </div>
// //         </li>
      
// //         <li>
// //           <div className="max-w-xl rounded overflow-hidden shadow-lg bg-white p-4">
// //             <img className="w-full h-48 object-cover" src={data.image} alt="Product Image" />
// //             <div className="px-6 py-4">
// //               <h2 className="font-bold text-xl mb-2">Product Title: {data.title}</h2>
// //               <p className="text-gray-700 text-base">Description: {data.description}</p>
// //             </div>
// //             <div className="px-6 pt-4 pb-2">
// //               <span className="block text-gray-900 font-semibold">Category: {data.category}</span>
// //               <span className="block text-gray-900 font-semibold">Price: {data.price}</span>
// //             </div>
// //           </div>
// //         </li>
// //       </ul>
      
      
// //     )

// //    })}
// //   </>
// //   )
// // }

// // 'use client'
// // import axios from 'axios'
// // import React, { useState } from 'react'

// // export default function ProductPage() {
// //          // https://fakestoreapi.com/products
// //          const [produc,setproduc] = useState([])
// //          const ProductData = async() =>{
// //             try {
// //              const Products =   await axios.get(' https://fakestoreapi.com/products')
// //              console.log('Data comes from api',Products.data);
// //              setproduc(Products.data)
             
// //             } catch (error) {
// //                 console.log('Error come in  api',error);
                
// //             }
// //          }
// //   return (
// //     <>
// //       <h1>Welcome To Star Developers Store</h1>
// //       <button onClick={ProductData} className='bg-slate-400'>Open Store</button>
// //       {produc.map((apidata)=>{
// //         return(
// //             <div>
// //                 <h1>Title :{apidata.title}</h1>
// //                 <img src={apidata.image} alt="" />
// //                 <p>Id: {apidata.id}</p>
// //                 <p>Description : {apidata.description}</p>
// //                 <p>price : {apidata.price}</p>
// //             </div>
// //         )
// //       })}
// //     </>
// //   )
// // }

// // 'use client'
// // import { error } from 'console';
// // import React from 'react'

// // export default function ProductPage() {
// //      // https://fakestoreapi.com/products

// //     const productdata = async()=>{
// //         try {
// //             const reponse = fetch('https://fakestoreapi.com/products');
// //             if (!reponse.ok) {
// //                 throw new Error('Network Response was not ok'+Response.statusText)
// //             }
// //             const data  = await reponse.json();
// //             console.log(data);
            
// //         } catch (error) {
// //             // Errorr(error.message);
// //             console.log('erroro is here',error);
            
// //         }
          
        
// //     }
// //   return (
// //     <>
// //       <button onClick={productdata} className='bg-slate-400'>Open Store</button>
// //     </>
// //   )
// // }


// 'use client'
// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// interface product{
//   id:number,
//   title:string,
//   description:string,
//   price:number,
//   image:string
// }

// export default function ProductPage() {
//   // https://fakestoreapi.com/products
//   const [productApi,setApiProduct] = useState<product[]>([])
//   const [looder,setlooder] = useState(false)
//   useEffect(()=>{
//     datafetchApi()
//   },[])
  
//   const datafetchApi = async()=>{
//     try {
//       setlooder(true)
//     const data  =  await axios.get<product[]>('https://fakestoreapi.com/products')
//       console.log('data comes from api',data.data);
//       setApiProduct(data.data)
//     } catch (error) {
//       console.log('the error is network problem',error);
      
//     }finally{
//       setlooder(false)
//     }
//   }
//   return (
//     <>
//       <h1>Welcome to the governor api data fetching class</h1>
//       <input type="file" />
//       <button className='bg-red-900'>See the products</button>
//       {looder && 'Looding...'}
//       {productApi.map((product:product)=>{
//         return(
//           <div className="flex gap-3">
//             <ul className='flex '>
//           <li>
//             <img src="https://firebasestorage.googleapis.com/v0/b/my-project-fd9c4.appspot.com/o/Suleman.jpg?alt=media&token=fdb9b2ea-8c38-45c2-8f6d-c036f17735e4" alt="pic" />
//             <img src={product.image} alt="pic" />
//             <p>id : {product.id}</p>
//             <p>Title : {product.title}</p>
//             <p>description : {product.description}</p>
//             <p>price : {product.price}</p>
//           </li>
//             </ul>
//           </div>
//         )
//       })}
//     </>
//   )
// }


// 'use client'
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// // import './ProductPage.css';  // Importing CSS file for loader

// export default function ProductPage() {
//   const [productApi, setApiProduct] = useState([]);
//   const [loading, setLoading] = useState(false);  // Loader state

//   useEffect(() => {
//     datafetchApi();
//   }, []);

//   const datafetchApi = async () => {
//     setLoading(true);  // Start the loader
//     try {
//       const data = await axios.get('https://fakestoreapi.com/products');
//       console.log('data comes from api', data.data);
//       setApiProduct(data.data);
//     } catch (error) {
//       console.log('the error is network problem', error);
//     } finally {
//       setLoading(false);  // Stop the loader after data is fetched
//     }
//   };

//   return (
//     <>
//       {/* <h1>Welcome to the governor API data fetching class</h1>
//       <input type="file" />
//       <button className='bg-red-900'>See the products</button> */}

//       {loading ? (  // Show loader while loading
//         <div className="loader-container">
//           <div className="loader"></div>
//         </div>
//       ) : (
//         productApi.map((product) => {
//           return (
//             <div className="flex gap-3" key={product.id}>
//               <ul className='flex'>
//                 <li>
//                   <img src="https://firebasestorage.googleapis.com/v0/b/my-project-fd9c4.appspot.com/o/Suleman.jpg?alt=media&token=fdb9b2ea-8c38-45c2-8f6d-c036f17735e4" alt="pic" />
//                   <img src={product.image} alt="pic" />
//                   <p>Id: {product.id}</p>
//                   <p>Title: {product.title}</p>
//                   <p>Description: {product.description}</p>
//                   <p>Price: {product.price}</p>
//                 </li>
//               </ul>
//             </div>
//           );
//         })
//       )}
//     </>
//   );
// }

// 'use client'
// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// interface products{
//   image:string,
//   id:number,
//   description:string,
//   price:number
// }
// export default function productPage() {
//   // 'https://fakestoreapi.com/products
//   const [apidata,setapidata]=useState<products[]>([]);
//   const [looder,setlooder] = useState(false);
//   const [update,setupdate] = useState(false)
//   useEffect(()=>{
//     productData()
//   },[update])
//   const productData = async()=>{
//     try {
//       setlooder(true)
//     const data =  await axios.get<products[]>('https://fakestoreapi.com/products');
//       console.log('Data comes from Api ',data.data);
//       setapidata(data.data)
//     } catch (error) {
//       console.log('Network problem is come ',error);
      
//     }finally{
//       setlooder(false)
//     }
//   }
//   const dependiescheck = ()=>{
//     setupdate(true)
//   }
//   return (
//     <>
//       <h1>welocme to my store</h1>
//      <button onClick={dependiescheck      } className='bg-yellow-300'>Products</button> 
//       {looder && 'looding data...'}
//       {apidata.map((product)=>{
//         return(
//           <div className="div">
//             <img src={product.image} alt="pic" />
//             <p>id : {product.id}</p>
//             <p>description : {product.description}</p>
//             <p>price : {product.price}</p>
//           </div>
//         )
//       })}
//     </>
//   )
// }


// import { log } from 'console';
// import React from 'react'

// const fetchApi = async ()=>{
//   const prodata = await fetch('https://fakestoreapi.com/products')

//   try {
//    const dataproduct = await  prodata.json();
//    console.log('Data is here',dataproduct.data);
//    return dataproduct.data
   
//   } catch (error) {
//     console.log('error ois copmmming ',error);
    
//   }
  
// }

// export default async function page() {
//   const fetchdata = await fetchApi()

//   return (
//     <>
   
//    {fetchdata?.map((productApidata:any)=>{
//       return(
//         <div>
//         <img src={productApidata.image} alt="image" />
//         <p>title : {productApidata.title}</p>
//         <p>id : {productApidata.id}</p>
//         <p>decsription : {productApidata.description}</p>
//         <p>price : {productApidata.price}</p>
//         </div>
//       )
//     })}
//     </>
//   )
// }


// import axios from 'axios';
// import React from 'react'

// export default  function  Productpage() {

//   const dataApi = async () =>{
//     try {
//       const dataproduct  = await axios.get('https://fakestoreapi.com/products');
     
     
//        console.log('data is here ' ,dataproduct.data);
       
//       } catch (error) {
//        console.log('error is come ',error);
       
//       }
//   }
//  // https://fakestoreapi.com/products
//   return (
    
//       <h1>Hello and welcome to my new store</h1>
//       <button onClick={dataApi}>hello</button>
  
//   )
// }


'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

interface product{
  id:number,
  title:string,
  description:string,
  price:number,
  image:string
}

export default function ProductPage() {
  // https://fakestoreapi.com/products
  const [productApi,setApiProduct] = useState<product[]>([])
  const [looder,setlooder] = useState(false)
  useEffect(()=>{
    datafetchApi()
  },[])
  
  const datafetchApi = async()=>{
    try {
      setlooder(true)
    const data  =  await axios.get<product[]>('https://fakestoreapi.com/products')
      console.log('data comes from api',data.data);
      setApiProduct(data.data)
    } catch (error) {
      console.log('the error is network problem',error);
      
    }finally{
      setlooder(false)
    }
  }
  return (
    <>
      <h1>Welcome to the governor api data fetching class</h1>
      <input type="file" />
      <button className='bg-red-900'>See the products</button>
      {looder && 'Looding...'}
      {productApi.map((product:product)=>{
        return(
          <div className="flex gap-3">
            <ul className='flex '>
          <li>
            <img src="https://firebasestorage.googleapis.com/v0/b/my-project-fd9c4.appspot.com/o/Suleman.jpg?alt=media&token=fdb9b2ea-8c38-45c2-8f6d-c036f17735e4" alt="pic" />
            <img src={product.image} alt="pic" />
            <p>id : {product.id}</p>
            <p>Title : {product.title}</p>
            <p>description : {product.description}</p>
            <p>price : {product.price}</p>
          </li>
            </ul>
          </div>
        )
      })}
    </>
  )
}