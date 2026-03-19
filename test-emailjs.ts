import emailjs from '@emailjs/browser';

// Simulate a form element structure to test EmailJS
const formElement = document.createElement("form");

const nameInput = document.createElement("input");
nameInput.name = "name";
nameInput.value = "Test User";
formElement.appendChild(nameInput);

const emailInput = document.createElement("input");
emailInput.name = "email";
emailInput.value = "test@example.com";
formElement.appendChild(emailInput);

const messageInput = document.createElement("input");
messageInput.name = "message";
messageInput.value = "Test Message";
formElement.appendChild(messageInput);

try {
    console.log("Sending...");
    const result = await emailjs.sendForm(
        'service_49bnjvo',
        'template_woz6vad',
        formElement,
        {
            publicKey: '5rIYuZsjFBfH9kTtk',
        }
    );
    console.log("Success!", result.text);
} catch (error) {
    console.error("FAILED...");
    console.error("Error details:", error);
    if (error && typeof error === "object" && "text" in error) {
        console.error("Error text:", (error as any).text);
    }
}
