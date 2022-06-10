const Sib = require('sib-api-v3-sdk');

require('dotenv').config();

const client = Sib.ApiClient.instance;

const apiKey = client.authentications['api-key'];
apiKey.apiKey = process.env.API_KEY;

const emailApi = new Sib.TransactionalEmailsApi();

const sender = {

    email: 'example@example.com',
    name: 'Yosmar Hinestroza'
}

const receiver = [
    {
        email: 'example@example.com',
    }
]

emailApi.sendTransacEmail({
    sender,
    to: receiver,
    subject: 'Correo de Prueba',
    textContent: 'Bienvenido a nuestro portal', //
    templateId: 1,
    /*    htmlContent: `
       <!DOCTYPE html>
       <html><body>
       <h1>Yosmar Hinestroza {{params.role}}</h1>
       <p>Mensaaje de Yosmar hinestroza desde NODEJS</p>
       </body>
       </html>
       `, */
    params: {
        role: 'Frontend develop'
    }
}).then(console.log)
    .catch(console.error);

