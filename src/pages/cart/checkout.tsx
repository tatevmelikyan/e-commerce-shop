import React, { useState } from 'react'
import { useAppSelector } from '../../app/hooks'
import CardForm from './cardForm'
import CartSummary from './cartSummary'

const Checkout = () => {
  const currentUser = useAppSelector((state) => state.currentUser.currentUser)

  const [shippingAddressInfo, setShippingAddressInfo] = useState({
    fullName: '',
    address: '',
    apt: '',
    city: '',
    zip: '',
    phone: '',
  })
  const [billingAddressInfo, setBillingAddressInfo] = useState({
    fullName: '',
    address: '',
    apt: '',
    city: '',
    zip: '',
    phone: '',
  })
  const [isSameAddress, setIsSameAddress] = useState(true)


  const handleCompletePurchase = () => {
    //call order placement
  }
  

  const formInputs = [
    {
      type: 'text',
      placeholder: 'Full Name',
      value: 'fullName',
    },
    {
      type: 'text',
      placeholder: 'Address',
      value: 'address',
    },
    {
      type: 'text',
      placeholder: 'Apt, Suite, Building',
      value: 'apt',
    },
    {
      type: 'text',
      placeholder: 'City',
      value: 'city',
    },
    {
      type: 'text',
      placeholder: 'ZIP',
      value: 'zip',
    },
    {
      type: 'tel',
      placeholder: 'Phone',
      value: 'phone',
    },
  ]

  return (
    <div className='checkout-page'>
      <div className='form'>
        <div className='checkout-form-container'>
          <div className='shipping-form'>
            <h3>Shipping Information</h3>

            {formInputs.map((field) => {
              return (
                <input
                  required
                  key={field.value}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={shippingAddressInfo[field.value as keyof typeof shippingAddressInfo]}
                  onChange={(e) =>
                    setShippingAddressInfo((prev) => {
                      return { ...prev, [field.value]: e.target.value }
                    })
                  }
                />
              )
            })}
            <p>
              <input
                type='checkbox'
                checked={isSameAddress}
                onChange={() => {
                  setIsSameAddress(!isSameAddress)
                }}
              />
              Use this address as my billing information
            </p>
          </div>
          {isSameAddress || (
            <div className='billing-form'>
              <h3>Billing Information</h3>
              {formInputs.map((field) => {
              return (
                <input
                  required
                  key={field.value}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={billingAddressInfo[field.value as keyof typeof billingAddressInfo]}
                  onChange={(e) =>
                    setShippingAddressInfo((prev) => {
                      return { ...prev, [field.value]: e.target.value }
                    })
                  }
                />
              )
            })}
            </div>
          )}
          <h3>Credit Card Information</h3>
          <CardForm />
        </div>
        <div className='order-summary-wrapper'>
          <CartSummary
            submitFunction={handleCompletePurchase}
            submitButtonName='complete purchase'
          />
        </div>
      </div>
    </div>
  )
}

export default Checkout
