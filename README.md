# WebSocket App

**Description:**

This React application uses WebSockets to communicate with a server on port 8999 (or your custom port).

Remember to change the port in the App and Plot components (or your actual component names) to match your server port.

**Instructions:**

1. **Installation:**

   ``
   npm install
   ``
   
2. **Start the Development Server:**

   ``
   npm start
  ``

3. **If needed - Replace Web Socket Port:**

   Open the App and Plot components

   Find the line:

   ``
   const socket = new WebSocket("ws://localhost:8999");
  ``

Replace 8999 with the actual port your WebSocket server is listening on.
