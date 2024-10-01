import React from 'react'

export default function Tracking() {
    return (
        <div className="p-4 max-w-lg mx-auto">
          <h1 className="text-2xl font-bold mb-4">Expense Tracker</h1>
    
          <div className="mb-4">
            <input
              className="border p-2 w-full mb-2"
              type="text"
              name="name"
            
              placeholder="Expense Name"
            />
            <input
              className="border p-2 w-full mb-2"
              type="number"
              name="amount"
              
              placeholder="Amount"
            />
            <input
              className="border p-2 w-full mb-2"
              type="date"
              name="date"
              
              placeholder="Date"
            />
            <select
              className="border p-2 w-full mb-2"
              name="category"
              
            >
              <option value="">Select Category</option>
              <option value="Food">Food</option>
  <option value="Transport">Transport</option>
  <option value="Entertainment">Entertainment</option>
  <option value="Rent">Rent</option>
  <option value="Utilities">Utilities</option>
  <option value="Groceries">Groceries</option>
  <option value="Healthcare">Healthcare</option>
  <option value="Savings">Savings</option>
  <option value="Investments">Investments</option>
  <option value="Insurance">Insurance</option>
  <option value="Clothing">Clothing</option>
  <option value="Education">Education</option>
  <option value="Charity">Charity</option>
  <option value="Gifts">Gifts</option>
  <option value="Travel">Travel</option>
  <option value="Dining Out">Dining Out</option>
  <option value="Subscriptions">Subscriptions</option>
  <option value="Phone">Phone</option>
  <option value="Internet">Internet</option>
  <option value="Fuel">Fuel</option>
  <option value="Repairs">Repairs</option>
  <option value="Childcare">Childcare</option>
  <option value="Household Items">Household Items</option>
  <option value="Laundry">Laundry</option>
  <option value="Pet Care">Pet Care</option>
  <option value="Personal Care">Personal Care</option>
  <option value="Gym">Gym</option>
  <option value="Medical Bills">Medical Bills</option>
  <option value="Loan Payments">Loan Payments</option>
  <option value="Home Maintenance">Home Maintenance</option>
  <option value="Car Maintenance">Car Maintenance</option>
  <option value="Electricity">Electricity</option>
  <option value="Water">Water</option>
  <option value="Gas">Gas</option>
              <option value="Other">Other</option>
            </select>
    
            <button
              className="bg-blue-500 text-white p-2 w-full"
            >
              Add Expense
            </button>
          </div>
    
         
        </div>
      );
}
