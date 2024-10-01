// 'use client'
// import React, { useState, useEffect } from 'react';

// interface Product {
//   title: string;
//   price: number;
//   description: string;
//   image: string;
//   category: string;
//   id?: number; // Optional id field for added products
// }

// export default function ProductPage() {
//   const [product, setProduct] = useState<Product>({
//     title: '',
//     price: 0,
//     description: '',
//     image: '',
//     category: ''
//   });
//   const [allProducts, setAllProducts] = useState<Product[]>([]); // For displaying all products
//   const [loading, setLoading] = useState(false);
//   const [responseMessage, setResponseMessage] = useState('');

//   // Fetch all products on initial load
//   useEffect(() => {
//     fetchAllProducts();
//   }, []);

//   // Fetch all products from the FakeStoreAPI
//   const fetchAllProducts = async () => {
//     try {
//       const response = await fetch('https://fakestoreapi.com/products');
//       const data = await response.json();
//       console.log('All products fetched:', data);
//       setAllProducts(data); // Store fetched products in state
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };

//   // Handle form input changes
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setProduct({
//       ...product,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // Add a new product using the POST method
//   const addProduct = async () => {
//     try {
//       setLoading(true);

//       const response = await fetch('https://fakestoreapi.com/products', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(product),
//       });

//       const newProduct = await response.json();
//       console.log('Product added successfully:', newProduct);

//       // Simulate persisting the added product locally by adding it to the product list
//       setAllProducts((prevProducts) => [...prevProducts, newProduct]);
//       setResponseMessage('Product added successfully!');
//       setProduct({ title: '', price: 0, description: '', image: '', category: '' }); // Clear form
//     } catch (error) {
//       console.error('Error adding product:', error);
//       setResponseMessage('Failed to add product.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <h1>Product Page</h1>

//       {/* Form for adding a new product */}
//       <div>
//         <h2>Add a New Product</h2>
//         <input
//           type="text"
//           name="title"
//           placeholder="Product Title"
//           value={product.title}
//           onChange={handleChange}
//         />
//         <input
//           type="number"
//           name="price"
//           placeholder="Price"
//           value={product.price}
//           onChange={handleChange}
//         />
//         <textarea
//           name="description"
//           placeholder="Description"
//           value={product.description}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="image"
//           placeholder="Image URL"
//           value={product.image}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="category"
//           placeholder="Category"
//           value={product.category}
//           onChange={handleChange}
//         />
//         <button onClick={addProduct}>Add Product</button>
//         {loading && <p>Adding product...</p>}
//         {responseMessage && <p>{responseMessage}</p>}
//       </div>

//       {/* Display all products */}
//       <div>
//         <h2>All Products</h2>
//         {allProducts.length > 0 ? (
//           allProducts.map((prod, index) => (
//             <div key={index} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
//               <img src={prod.image} alt={prod.title} width="100" />
//               <p>Title: {prod.title}</p>
//               <p>Price: ${prod.price}</p>
//               <p>Description: {prod.description}</p>
//               <p>Category: {prod.category}</p>
//             </div>
//           ))
//         ) : (
//           <p>No products found.</p>
//         )}
//       </div>
//     </>
//   );
// }


'use client'
import React, { useState, useEffect } from 'react';

interface Product {
  id?: number; // Optional id for new products
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export default function ProductPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [productForm, setProductForm] = useState<Product>({
    title: '',
    price: 0,
    description: '',
    image: '',
    category: '',
  });
  const [isEditing, setIsEditing] = useState(false); // State to check if we're editing
  const [currentProductId, setCurrentProductId] = useState<number | null>(null); // ID of the product being edited
  const [responseMessage, setResponseMessage] = useState('');

  // Fetch all products on initial load
  useEffect(() => {
    fetchAllProducts();
  }, []);

  // Fetch all products from the FakeStoreAPI
  const fetchAllProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProductForm({
      ...productForm,
      [e.target.name]: e.target.value,
    });
  };

  // Function to add a new product
  const addProduct = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productForm),
      });

      const newProduct = await response.json();
      setProducts((prevProducts) => [...prevProducts, newProduct]);
      setResponseMessage('Product added successfully!');
      resetForm();
    } catch (error) {
      console.error('Error adding product:', error);
      setResponseMessage('Failed to add product.');
    }
  };

  // Function to edit an existing product
  const editProduct = async () => {
    if (currentProductId === null) return;

    try {
      const response = await fetch(`https://fakestoreapi.com/products/${currentProductId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productForm),
      });

      const updatedProduct = await response.json();
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === currentProductId ? updatedProduct : product
        )
      );
      setResponseMessage('Product updated successfully!');
      resetForm();
    } catch (error) {
      console.error('Error updating product:', error);
      setResponseMessage('Failed to update product.');
    }
  };

  // Function to delete a product
  const deleteProduct = async (id: number) => {
    try {
      await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: 'DELETE',
      });
      setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
      setResponseMessage('Product deleted successfully!');
    } catch (error) {
      console.error('Error deleting product:', error);
      setResponseMessage('Failed to delete product.');
    }
  };

  // Function to reset the form
  const resetForm = () => {
    setProductForm({ title: '', price: 0, description: '', image: '', category: '' });
    setIsEditing(false);
    setCurrentProductId(null);
  };

  // Function to start editing a product
  const startEditing = (product: Product) => {
    setProductForm(product);
    setIsEditing(true);
    setCurrentProductId(product.id || null);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditing) {
      editProduct(); // If editing, call edit function
    } else {
      addProduct(); // If adding, call add function
    }
  };

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-2xl font-bold mb-5">Product Management</h1>

      {/* Form for adding/editing a product */}
      <form onSubmit={handleSubmit} className="mb-5 p-5 border rounded-lg shadow-lg bg-white">
        <h2 className="text-xl font-semibold mb-3">{isEditing ? 'Edit Product' : 'Add a New Product'}</h2>
        <input
          type="text"
          name="title"
          placeholder="Product Title"
          value={productForm.title}
          onChange={handleChange}
          className="mb-3 p-2 border rounded w-full"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={productForm.price}
          onChange={handleChange}
          className="mb-3 p-2 border rounded w-full"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={productForm.description}
          onChange={handleChange}
          className="mb-3 p-2 border rounded w-full"
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={productForm.image}
          onChange={handleChange}
          className="mb-3 p-2 border rounded w-full"
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={productForm.category}
          onChange={handleChange}
          className="mb-3 p-2 border rounded w-full"
          required
        />
        <button 
          type="submit" 
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">
          {isEditing ? 'Update Product' : 'Add Product'}
        </button>
      </form>

      {responseMessage && <p className="text-green-500 mb-3">{responseMessage}</p>} {/* Display response messages */}

      {/* Display all products */}
      <h2 className="text-xl font-semibold mb-3">All Products</h2>
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="border rounded-lg shadow-md mb-4 p-4 bg-white">
            <img src={product.image} alt={product.title} className="w-32 h-32 mb-3" />
            <p className="font-semibold">Title: {product.title}</p>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <p>Category: {product.category}</p>
            <div className="mt-3">
              <button 
                onClick={() => startEditing(product)} 
                className="bg-yellow-500 text-white p-1 rounded mr-2 hover:bg-yellow-600 transition">
                Edit
              </button>
              <button 
                onClick={() => deleteProduct(product.id || 0)} 
                className="bg-red-500 text-white p-1 rounded hover:bg-red-600 transition">
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
}
