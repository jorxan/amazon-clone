import React, {useState} from 'react';
import { useStateValue } from '../../StateProvider';
import './Payment.css';
import CheckoutProduct from '../Checkout/CheckoutProduct';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { Link } from 'react-router-dom';

function Payment() {

    const [{basket, user}, dispatch] = useStateValue();
    const [errorr, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

    const stripe = useStripe();
    const elements = useElements();
    
    const handleSubmit = (e) => {
        // fancy stripe stuff
    }

    const handleChange = e => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    }

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (
                        <Link to='/checkout'>{basket?.length} items 
                        </Link>)
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review Items and Delivery</h3>
                        <div className="payment__items">
                            {basket?.map(item => (
                                <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                            <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                                <form onSubmit={handleSubmit}>
                                    <CardElement onChange={handleChange}/>
                                </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
