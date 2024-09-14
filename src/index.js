import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



  fetch('https://api.ipify.org?format=json').then(response => response.json()).then(data => {
      const userIp = data.ip;  // Get the IP address
      console.log("Your IP address is: " + userIp);
  });
      
      
      /*
      // Perform an action based on the IP address
      if (userIp === 'YOUR_TARGET_IP') {
        // If the user's IP is a specific value, do something (e.g., redirect)
        window.location.href = "https://www.example.com/special-page";
      } else {
        // For other IPs, show a message or take a different action
        alert("You have a different IP: " + userIp);
      }
    })
    .catch(error => {
      console.error("Error fetching IP address:", error);
    });*/

reportWebVitals(console.log);