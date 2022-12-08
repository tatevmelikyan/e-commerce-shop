import React from 'react'
import './styles.css'

export default function AddProduct() {
  return (
    <div>
        <div>
        <input type='text' placeholder='Write the name of the product'/>
        </div>
        <div>
        <input type='number' placeholder='Write the price of the product'/>
        </div>
        <div>
        <input type='number' placeholder='Number of the product'/>
        </div>
    </div>
  )
}
