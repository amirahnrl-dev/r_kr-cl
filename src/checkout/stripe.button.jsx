import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
    const priceForStipe = price * 100;  //converted value
    const publishableKey = '';

    const onToken = token => {
        console.log(token);
        alert("Payment Successful");
    }

    return (
        <StripeCheckout 
            label="Pay Now"
            name="Krona Cl Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${ price }`}
            amount={ priceForStipe }
            panelLabel="Pay Now"
            token={ onToken } // on successful
            stripeKey={ publishableKey }
        />
    );
}

export default StripeButton;