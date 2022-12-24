import * as functions from 'firebase-functions'

exports.createStripeCheckout = functions.https.onCall(async(data, context) => {
    //Stripe init
    const stripe = require('stripe')(functions.config().stripe.secret_key)
    const session = await stripe.checkout.session.create({
        payment_method_types: ['card'],
        mode: 'payment',
        success_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000/shoppingcart',
        line_items: [
            {
                quantity: 1,
                price_data: {
                    currency: 'usd',
                    unit_amount: 1000,
                    product_data: {
                        name: 'Christmas tree'
                    }
                }
            }
        ]
    })
    return {
        id: session.id
    }
})

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
