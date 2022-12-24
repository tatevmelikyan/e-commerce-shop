import React from 'react'
import {FiCopy} from 'react-icons/fi'
import { toast } from 'react-toastify'
import {AiOutlineCheckCircle} from 'react-icons/ai'


const OrderDetails = () => {
    const handleCopyNumber = () => {
        window.navigator.clipboard.writeText('241645').then(() => {
            toast.success('Order number copied')
        }).catch((err) => {
            toast.error(err)
        })
    }
  return (
    <div>
        <h2>Order Details</h2>
        <div className='order-details-wrapper'>
            <div className='order-number-date-container'>
                <div>
                    <h4>Order number <FiCopy cursor='pointer' onClick={handleCopyNumber} /></h4>
                    <span className='order-number'>241645</span>
                </div>
                <div>
                    <h4>Order date</h4>
                    <span>12/12/2022</span>
                </div>
            </div>
            <div className='order-details-container'>
                <div className='order-status-container'>
                    <h4>Delivery Method:</h4><span> Standard delivery</span>
                    <ul className='order-timeline'>
                        <li>
                          <div className='timeline-icon'>
                          <span><AiOutlineCheckCircle /></span>
                          </div>
                          <div className='timeline-content-wrapper'>
                            <div>
                                <h4 className='order-timeline-item-title'>Order received</h4>
                                <p>Great! We&apos;ve got your order.</p>
                            </div>
                            <span className='order-timeline-date'>11/11/2022</span>
                          </div>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </div>
  )
}

export default OrderDetails