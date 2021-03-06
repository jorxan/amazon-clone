

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require("stripe")('sk_test_51HTJSKJx5w0yKJg6C5Vu7DmR6M2I1oiZ3wckWwDy7wwZK6jc4oGuSJwuysZHY6lc8l9xZuJiUEtEdPQn3wJ4pDxN00zVOGydK2')

//API

// App config
const app = express();

//middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('payment request recieved boom', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
})
//listen command
exports.app = functions.https.onRequest(app);