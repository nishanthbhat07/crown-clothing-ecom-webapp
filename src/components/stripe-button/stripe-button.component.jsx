import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HojBHDpfvzgJR4pXFOGRvutxEvv5tUs2z61xMMxhFkMlyqlpQ8zmwPOLiixRqmf3x0ygs71SWxkpbldhiH18t4800Am9RBDzh";
  const onToken = (token) => {
    console.log(token);
    alert("Payment successful");
  };
  return (
    <StripeCheckout
      stripeKey={publishableKey}
      name="CRWN CLOTHING"
      allowRememberMe
      label="Pay Now"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
    />
  );
};
export default StripeCheckoutButton;
