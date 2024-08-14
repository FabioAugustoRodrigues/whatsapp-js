const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client();

client.on('qr', (qr) => {
    qrcode.generate(qr, {small: true});
});

client.once('ready', () => {
    console.log('Client is ready!');

    const number = '';
    const mensagem = 'Hello world';

    client.sendMessage(`${number}@c.us`, mensagem).then(response => {
        console.log('Message sent:', number);
    }).catch(err => {
        console.error('There was an error:', err);
    });
});

client.initialize();
