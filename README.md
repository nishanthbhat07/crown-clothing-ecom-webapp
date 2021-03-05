# Ecommerce Web-App

# Aim
To built a clothing web-app using ReactJS and firebase as a back-end service.

## Features

These are the following features:
<li>User can create a new account or login for existing users.</li>
<li>Easy signup using google account</li>
<li>User can buy clothes, shoes, and other accessories</li>
<li>Responsive in nature</li>
<li>Add items to cart</li>
<li>Remove items from the cart</li>
<li>Persistent storage for cart items</li>
<li>Integrated stripe-api for payments</li>

## Installation

 1. Git clone this repository or download as zip.
 2. Open terminal in windows/macos/ubuntu and install all packages using following command in the folder where package.json is located:<br>
 <code>yarn install</code><br>
 This will install all the packages in the package.json file. If you're using npm then <br>
 <code>npm install</code><br>
 3. After installing all the packages, you're good to run the app and serve it on localhost 3000.
 4. Run the following <br>
	 <code>yarn start</code><br>

## Website
To view this website, you can view it here!
<a>https://crwn-clothing-ecom-webapp.herokuapp.com/</a>

## Tech Stack
This web-app is built using ReactJS. 
 - The web app uses a cloud database: Firebase Firestore. 
 - The google authentication is also handled by firebase auth.
 - Styling is done using Sass.
 - For payment gateway, Stripe api is used.
 -  It uses redux and redux-saga  as state management library. 
 -	A mini back-end is implemented to complete the payment process. It is built using expressJS.



