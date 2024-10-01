// 'use client'
// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// interface datas{
// image:string
// id:number
// title:string
// description:string
// price:number
// }

// export default function ProductPage() {
//   const [product,setproduct]= useState<datas[]>([]);
//   const [looder,setlooder] = useState(false);
//   useEffect(()=>{
//      ApiProduct()
//   },[])
//     //'https://fakestoreapi.com/products'
//     const ApiProduct = async() =>{
//       try {
//         setlooder(true)

//         const data =  await axios.get('https://fakestoreapi.com/products');
//         console.log('data fetch from ',data.data);
//         setproduct(data.data)
//       } catch (error) {
//         console.log('error is  apear your network',error);
        
//       }finally{
//         setlooder(false)
//       }
      
       
//     }
  
//   return (
//     <>
//     <h1>Welcome to Apna Store</h1>
  
//     {looder && 'loodind data...'}

//     {product.map((product)=>{


//       return(

//         <div>
//           <img src={product.image} alt="image" />
//           <p>title : {product.title}</p>
//           <p>id : {product.id}</p>
//           <p>description : {product.description}</p>
//           <p>price :{product.price}</p>
//         </div>
//       )
//     })}
//     </>

//   )
// }


// 'use client'
// import React, { useEffect, useState } from 'react'

// interface Datas {
//   image: string;
//   id: number;
//   title: string;
//   description: string;
//   price: number;
// }

// export default function ProductPage() {
//   const [product, setProduct] = useState<Datas[]>([]);
//   const [loader, setLoader] = useState(false);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       setLoader(true); // Show loading state

//       const response = await fetch('https://fakestoreapi.com/products');
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       console.log('Data fetched from API:', data);

//       setProduct(data); // Update product state with fetched data
//     } catch (error) {
//       console.error('Error occurred while fetching data:', error);
//     } finally {
//       setLoader(false); // Hide loading state
//     }
//   }

//   return (
//     <>
//       <h1>Welcome to Apna Store</h1>

//       {loader && 'Loading data...'}

//       {product.map((product) => {
//         return (
//           <div key={product.id}>
//             <img src={product.image} alt="image" />
//             <p>Title: {product.title}</p>
//             <p>ID: {product.id}</p>
//             <p>Description: {product.description}</p>
//             <p>Price: {product.price}</p>
//           </div>
//         );
//       })}
//     </>
//   );
// }

// 'use client'
// import { METHODS } from 'http'
// import { headers } from 'next/headers'
// import React, { useEffect, useState } from 'react'

// interface data {
//   image:string
//   id:number
//   title:string
//   price:number
//   description:string
// }
// export default   function  Fetchpage() {
//   const [product,setproduct] = useState<data[]>([]);
//   const [looder,setlooder] = useState(false);
//   useEffect(()=>{
//     dataApi()
//   },[])
//   const  dataApi = async ()=>{
//   setlooder(true)

//     try {

//      const response = await fetch('https://fakestoreapi.com/products');
//      if(!response.ok){
//       throw new Error ('Your Network Problem come')
//      }
//      const data = await response.json();
//      console.log('data from api',data);
//      setproduct(data)
     
//     } catch (error) {
//       console.log('error is your network',error);
      
//     }finally{
//       setlooder(false)
//     }

//     const addProduct = async () =>{
//       e.preventDefault();
//       try {
//       const respon = await  fetch('https://fakestoreapi.com/products');
//       method:'POST'
//       headers:{
//         'Content-Type' :  'application/json',
//       },
//       body.Stri
      
//       } catch (error) {
        
//       }
//     }
//   }

//   return (
//    <>
//    <h1>Open store with  Api</h1>
//    {looder && 'Looding data....'}
//    {product.map((products)=>{
//     return(
//       <div>
//         <img src={products.image} alt="image" />
//         <p>id :{products.id}</p>
//         <p>title : {products.title}</p>
//         <p>description : {products.description}</p>
//         <p>price : {products.price}</p>
//       </div>
//     )
//    })}
//    </>
//   )
// // }
// 'use client'

// import { useState } from 'react';

// const AddProduct = () => {
//     const [product, setProduct] = useState({
//         title: '',
//         price: '',
//         description: '',
//         image: '',
//         category: ''
//     });

//     const [message, setMessage] = useState('');

//     // Handle input change
//     const handleChange = (e) => {
//         setProduct({
//             ...product,
//             [e.target.name]: e.target.value
//         });
//     };

//     // Handle form submission
//     const handleSubmit = async (e) => {
//         e.preventDefault(); // Prevent form reload

//         try {
//             const response = await fetch('https://fakestoreapi.com/products', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(product),
//             });

//             const data = await response.json();
//             console.log(data);
//             setMessage('Product added successfully!');
//         } catch (error) {
//             console.error('Error adding product:', error);
//             setMessage('Failed to add product');
//         }
//     };

//     return (
//         <div style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem' }}>
//             <h2>Add New Product</h2>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Product Title:</label><br />
//                     <input
//                         type="text"
//                         name="title"
//                         value={product.title}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div><br />

//                 <div>
//                     <label>Price:</label><br />
//                     <input
//                         type="number"
//                         name="price"
//                         value={product.price}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div><br />

//                 <div>
//                     <label>Description:</label><br />
//                     <textarea
//                         name="description"
//                         value={product.description}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div><br />

//                 <div>
//                     <label>Image URL:</label><br />
//                     <input
//                         type="url"
//                         name="image"
//                         value={product.image}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div><br />

//                 <div>
//                     <label>Category:</label><br />
//                     <input
//                         type="text"
//                         name="category"
//                         value={product.category}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div><br />

//                 <button type="submit">Add Product</button>
//             </form>

//             {message && <p>{message}</p>}
//         </div>
//     );
// };

// export default AddProduct;
'use client'
import Link from 'next/link'
import React,{useEffect, useState} from 'react'
interface typees{
    id?:number
    image:string
    title:string
    description:string
    price:number
    category:string
}
export default function Productpage() {
    const [product,setproduct] = useState<typees[]>([])
    const [productform,setproductfrom] = useState<typees>({
        image:'',
        title:'',
        price:0,
        description:'',
        category:''

    })
    useEffect(()=>{
      fetchAllProducts()
    },[])
    const [message,setmessage] = useState('');
    const [currentProductId,setCurrentProductId]  = useState<number | null>(null);
    const [editing,setIsEditing] = useState(false)
    const fetchAllProducts = async () =>{
        try {
        const response   =  await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setproduct(data);
          
        } catch (error) {
            console.log('Network problem error ',error);
            
        }
    }

    const handleinputform = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        setproductfrom({
            ...productform,
            [e.target.name]:e.target.value
        })
    }

    const resetform = () =>{
     setproductfrom({title:'',category:'',price:0,image:'',description:''});
     setIsEditing(false)
    }
    // basically first i me make   a usestate thats for inputevent capture second i make product and set producv use stae and one i make handle input where i set all input fielss and one i make reset form where i reset all 
    // now i make add product in api 

    const addproduct = async () =>{
      try {
        const response = await fetch('https://fakestoreapi.com/products',{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(productform)
        });

        const data = await response.json();
        setproduct((prevprod)=> [...prevprod,data] )
        setmessage('Product added Successfully!')
        resetform()
      } catch (error) {
        console.log('Failed to add product',error);
        setmessage('Failed to add product')
        
      }
    }

    // now i make add product in api 

    // Now we make edit how i edit product in api

    const editproduct = async ()=>{
      if(currentProductId === null) return;
      try {
        const respone = await fetch(`https://fakestoreapi.com/products/${currentProductId}`,{
              method:'PUT',
              headers:{
                'Content-Type':'application/json'
              },
              body:JSON.stringify(productform)
        });
        const data  = await respone.json();
        setproduct((prevpro)=> prevpro.map((product)=> product.id === currentProductId ? data :product));
        setmessage('Product updated Successfully!')
        resetform()
      } catch (error) {
        console.log('Failed to update product');
        setmessage('Failed to Updated prodct')
        setIsEditing(true);
      }
    }

    // function to start editing process
    const startediting = (product:typees) =>{
      setproductfrom(product);
      setIsEditing(true)
      setCurrentProductId(product.id || null)

    }

    // now iu handle to call function to handle the edit base 

    const handleSubmit = (e:any) =>{
      e.preventDefault();
      if (editing) {
        editproduct()
      }else{
        addproduct();
      }
    }

    // Now we make edit how i edit product in api

    // now i end make dellete product in api

    const deleteProduct = async (id:number) =>{
     try {
      await fetch(`https://fakestoreapi.com/products${id}`,{
        method:'DELETE'
      })
      setproduct((prevproduct)=> prevproduct.filter((product)=>product.id !== id));
      setmessage('Product Deleted Successfully!')
     } catch (error) {
      console.log('Failed to delete product');
      setmessage('Failed to delete product')
      
     }
    }

    // now i end make dellete product in api


  return (
<div className="container mx-auto p-5">
  <h1 className="text-2xl font-bold mb-5">Product Management</h1>

  {/* Form for adding/editing a product */}
  <form  onSubmit={handleSubmit} className="mb-5 p-5 border rounded-lg shadow-lg bg-white form">
    <h2 className="text-xl font-semibold mb-3">Add a New Product</h2>
    <input
   
      type="text"
      name='title'
      value={productform.title}

      onChange={handleinputform}
      placeholder="Product Title"
      className="mb-3 p-2 border rounded w-full"
      required
    />
    <input
   
      type="number"
      name='price'
      placeholder="Price"
      value={productform.price}

      onChange={handleinputform}
      className="mb-3 p-2 border rounded w-full"
      required
    />
    <textarea
    name='description'
      placeholder="Description"
      value={productform.description}

      onChange={handleinputform}
      className="mb-3 p-2 border rounded w-full"
      required
    />
    <input
      name='image'
      type="text"
      placeholder="Image URL"
    value={productform.image}

      onChange={handleinputform}
      className="mb-3 p-2 border rounded w-full"
      required
    />
    <input
      name='category'
      type="text"
      placeholder="Category"
    value={productform.category}

      onChange={handleinputform}
      className="mb-3 p-2 border rounded w-full"
      required
    />
    <button 
      type="submit" 
      className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">
     {editing ? 'Update Product':'Add Product'}
    </button>
  </form>
  {message && <p className='text-green-500 mb-3'>{message}</p>}

  <h2 className="text-xl font-semibold mb-3">All Products</h2>
  <div className="flex flex-wrap justify-center">
  {product.length > 0 ? (
    product.map((product) => {
      return (
        <div
          key={product.id}
          className="max-w-xs bg-white shadow-md rounded-lg overflow-hidden m-4 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          {/* Image Section */}
          <div className="w-full h-40">
            <img
              src={product.image}
              alt="image"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Product Details Section */}
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">Title: {product.title}</h3>
            <p className="text-gray-700 text-sm mb-2">Price: ${product.price}</p>
            <p className="text-gray-700 text-sm mb-2">Category: {product.category}</p>
            <p className="text-gray-600 text-xs mb-4 truncate">Description: {product.description}</p>

            {/* Buttons Section */}
            <div className="flex justify-between space-x-2">
              <button
                onClick={() => startediting(product)}
                className="bg-amber-300 text-white px-3 py-1 text-sm rounded hover:bg-amber-400 transition-all"
              >
                <Link href='/fetchData' >
                Edit
                </Link>

              </button>
              <button
                onClick={() => deleteProduct(product.id || 0)}
                
                className="bg-red-600 text-white px-3 py-1 text-sm rounded hover:bg-red-700 transition-all"
              >
                Delete
              </button>
              <button
                // onClick={() => handleBuyNow(product)}   
                className="bg-green-500 text-white px-3 py-1 text-sm rounded hover:bg-green-600 transition-all"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      );
    })
  ) : (
    <p>Loading Data from API ......</p>
  )}
</div>

</div>

  )
    

}
