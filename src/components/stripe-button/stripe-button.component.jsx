import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HHbsKJBhgTIcR6rh5yZgDObxrHtZHjzovop4fbaVRMr5qGriExxAnReur9tUtB4ckYjB6PEDl7SRYdUNiydmQjO00myT2qepD';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='vantage Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/Nwg.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;