import React from 'react'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import { Link } from 'react-router-dom'

const CustomerOrders = () => {
    const orders = [
        {
            number: 12334,
            status: 'Delivered',
            date: new Date(),
            subtotal: 100,
            items: [{
                product: {id: '1',imageUrls: ['https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202239/0089/faux-frosted-christmas-tree-xl.jpg'], title: 'Christmas Tree'},
                qty: 1
            }]
        }
    ]
  return (
    <div className='customer-orders-page'>
        <h2>My purchases</h2>
        <div className='customer-orders-container'>
           {
            orders.map(order => {
                return (
                   <Link to={`/account/orders/purchase/${order.number}`} key={order.number}>
                     <div  className='customer-order'>
                         <h3>{order.status}</h3>
                         <div className='qty-date-subtotal'>
                         <span>{order.items.length} {order.items.length > 1 ? 'items' : 'item'}</span>
                             <span>{order.date.toLocaleDateString('en-GB')}</span>
                             <span>${order.subtotal.toLocaleString()}</span>
                         </div>
                         <div className='items-arrow'>
                             <div className='customer-orders-items'>
                                 {order.items.map(item => {
                                     return (
                                         <div key={item.product.id} className='customer-order-item'>
                                             <img src={item.product.imageUrls[0]} alt="product" />
                                         </div>
                                     )
                                 })}
                             </div>
                             <span>
                                 <MdOutlineKeyboardArrowRight />
                             </span>
                         </div>
                     </div>
                   </Link>
                )
            })
           }
        </div>
    </div>
  )
}

export default CustomerOrders