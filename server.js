const express = require('express');
const app = express();
const port = 8080;

// Home route
// app.get('/', (req, res) => {
//   res.send(`
//       <h1>Hello World!</h1>
//           <p>Welcome to my LTI first app. Here are a few things you can do:</p>
//             `);
//             });
//
//             // Personalized greeting route
//             app.get('/greet', (req, res) => {
//               res.send(`
//                   <h1>Enter your name for a personalized greeting:</h1>
//                       <form action="/greet" method="get">
//                             <label for="name">Name:</label>
//                                   <input type="text" id="name" name="name" placeholder="Your name here" required>
//                                         <button type="submit">Submit</button>
//                                             </form>
//                                               `);
//                                               });
//
//                                               // Handle the personalized greeting after form submission
//                                               app.get('/greet', (req, res) => {
//                                                 const name = req.query.name || 'Guest';
//                                                   res.send(`
//                                                       <h1>Hello, ${name}!</h1>
//                                                           <p>Welcome to the personalized greeting page.</p>
//                                                               <p>Would you like to <a href="/">go back</a> or <a href="/contact">contact us</a>?</p>
//                                                                 `);
//                                                                 });
//
//                                                                 // Information page
//                                                                 app.get('/info', (req, res) => {
//                                                                   res.send(`
//                                                                       <h1>About this app</h1>
//                                                                           <p>This is a simple Express app where you can:</p>
//                                                                               <ul>
//                                                                                     <li>Get a personalized greeting</li>
//                                                                                           <li>Learn more about the app</li>
//                                                                                                 <li>Contact us for more information</li>
//                                                                                                     </ul>
//                                                                                                         <p>Feel free to explore the different routes in the app!</p>
//                                                                                                             <p><a href="/">Go back to Home</a></p>
//                                                                                                               `);
//                                                                                                               });
//
//                                                                                                               // Contact page
//                                                                                                               app.get('/contact', (req, res) => {
//                                                                                                                 res.send(`
//                                                                                                                     <h1>Contact Us</h1>
//                                                                                                                         <p>For any inquiries, please reach out to us at:</p>
//                                                                                                                             <p>Email: contact@example.com</p>
//                                                                                                                                 <p>Phone: 123-456-7890</p>
//                                                                                                                                     <p><a href="/">Go back to Home</a></p>
//                                                                                                                                       `);
//                                                                                                                                       });
//
//                                                                                                                                       // Start the server
//                                                                                                                                       app.listen(port, () => {
//                                                                                                                                         console.log(`Example app listening on port ${port}`);
//                                                                                                                                         });