const nodemailer = require('nodemailer');

// Configuración del transporte de correo
const transporter = nodemailer.createTransport({
    service: 'Gmail',  // Puedes cambiar esto según tu proveedor de correo
    auth: {
        user: 'a.olvera.ld.oralecdmx@gmail.com',  // Tu dirección de correo
        pass: 'LaboratorioDig07'  // Tu contraseña
    }
});

// La dirección de correo a la que deseas enviar el mensaje
const recipientEmail = 'aquilespolvera@gmail.com';

confirmButton.addEventListener('click', () => {
    // Obtén la lista de productos seleccionados y conviértela en un mensaje
    const selectedProductsMessage = selectedProducts.join(', ');

    // Configuración del mensaje
    const mailOptions = {
        from: 'a.olvera.ld.oralecdmx@gmail.com',  // Tu dirección de correo
        to: recipientEmail,
        subject: 'Productos Seleccionados para la Boda',
        text: `Los productos seleccionados son: ${selectedProductsMessage}`
    };

    // Envía el correo
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error al enviar el correo:', error);
        } else {
            console.log('Correo enviado:', info.response);
        }
    });
});
