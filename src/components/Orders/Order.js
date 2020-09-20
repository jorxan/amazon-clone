import moment from 'moment';
import React from 'react';
import CheckoutProduct from '../Checkout/CheckoutProduct';
import './Orders.css';

function Order({order}) {
    return (
        <div className="order">
            <h1>Order</h1>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>

            <p>
                <small>{order.id}</small>
            </p>
            {order.data.basket?.map(item => (
                <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                hideButton
                />
            ))}
        </div>
    )
}

export default Order
