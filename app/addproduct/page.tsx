// 'use client'
// import React, { useState } from 'react'

// export default function ProductForm() {
//     const [name,setname] = useState('');
//     const [image,setimage] = useState(null);
//     const [price,setprice] = useState('') 
//     const [category,setcategori] = useState('')
    
//     const imageHandle = (e:any)=>{
//         const file = e.target.files[0];
//         if(file){
//             setimage(file);
//         }
//     }
//     const handlesubmit = (e:any) =>{
//         e.preventDefault();
//         if(!name||!image){
//             alert('name and age are required');
//             return;
//         }
//     }
    
//     return (
//       <form onSubmit={handlesubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
//         {/* Product Name */}
//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
//             Product Name
//           </label>
//           <input
//           onChange={(e) => setname(e.target.value)}
//           value={name}
//             type="text"
//             id="name"
//             className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Enter product name"
//             required
//           />
//         </div>
  
//         {/* Product Image */}
//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="image">
//             Product Image
//           </label>
//           <input
//           onChange={imageHandle}
          
//             type="file"
//             id="image"
//             accept="image/*"
//             className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//           {image &&(
//             <div className="mb-4">
//                 <p className='text-grey-700'>
//             selected file :{image.name}
//                 </p>
//                 <img className='w-full h-auto rounded-md shadow-md' src={URL.createObjectURL(image)} alt="Selected" />
//             </div>
//           )}
//         </div>
  
//         {/* Product Price */}
//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="price">
//             Product Price
//           </label>
//           <input
//           onChange={(e) => setprice(e.target.value)}
//           value={price}
//             type="number"
//             id="price"
//             className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Enter product price"
//             required
//           />
//         </div>
  
//         {/* Product Category */}
//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="category">
//             Product Category
//           </label>
//           <select
//             id="category"
//             onChange={(e) => setcategori(e.target.value)}
//             value={category}
//             className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           >
//             <option value="">Select category</option>
//             <option value="Electronics">Electronics</option>
//             <option value="Clothing">Clothing</option>
//             <option value="Home & Garden">Home & Garden</option>
//             <option value="Beauty">Beauty</option>
//             <option value="Toys">Toys</option>
//           </select>
//         </div>
  
//         {/* Submit Button */}
//         <div className="text-center">
//           <button
//             type="submit"
//             className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
//           >
//             Add Product
//           </button>
//         </div>
//       </form>
//     );
//   }
  
