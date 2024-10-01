import Link from 'next/link';
export default function ProductList() {

    return (
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          Complete CRUD System for Product Management
        </h1>
        
        <p className="text-lg text-gray-700 text-center mb-6">
          This system allows you to <span className="font-bold">Create, Read, Update, and Delete</span> products with ease.
        </p>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example of product card */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Product Name</h2>
            <p className="text-gray-600 mb-4">
              Description of the product goes here. Manage products through various operations.
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Edit
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2">
              Delete
            </button>
          </div>
          
          {/* Repeat product cards for more products */}
        </div>
  
        <div className="text-center mt-8">
        <Link href='/addproduct'>

          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg">
            Add New Product
            
          </button>
          </Link>

        </div>
      </div>
    );
  }
  
