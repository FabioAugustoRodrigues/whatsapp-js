# WhatsApp Web.js Bot

This is a basic implementation of a WhatsApp bot using the [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js) library. The bot connects to WhatsApp via a QR code, initializes the client, and sends a message to a specified number.

## Features
- Generate a QR code for connecting to WhatsApp Web.
- Send a predefined message to a specific phone number.

## Requirements
- [Node.js](https://nodejs.org/) installed on your machine.
- A valid WhatsApp account.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/your-repository.git
   ```

2. Navigate to the project directory:
   ```bash
   cd your-repository
   ```

3. Install dependencies:
   ```bash
   npm install whatsapp-web.js qrcode-terminal
   ```

## Usage
1. Open the project in your terminal
   
2. Run the script:
   ```bash
   node index.js
   ```

3. Scan the QR code displayed in your terminal using the Whatsapp app on yout phone

4. Update the ```number``` and ```mensagem``` variables in the script to specify the recipient and message content:
   ```js
   const number = '55112345678901'; // Replace with the recipient's phone number (including country code).
   const mensagem = 'Hello world'; // Replace with your message.
   ```

5. The bot will send the message to the specified recipient.

## Notes
1. The phone number should include the country code (e.g., 55112345678901).




