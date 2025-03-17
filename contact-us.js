document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("nMe9hC7Q-CTNrARL9"); 

    document.getElementById("contact-form").addEventListener("submit", sendMail);
});

function sendMail(event) {
    event.preventDefault(); 

    let name = document.getElementById("uname").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    document.getElementById("loading").style.display = "block";

    emailjs.send("service_z8rgzhn", "template_lbkxabn", {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message
    }).then(function(response) {
        document.getElementById("loading").style.display = "none";
        document.getElementById("feedback").textContent = "✅ Your message was sent successfully!";
        document.getElementById("contact-form").reset(); 
    }).catch(function(error) {
        document.getElementById("loading").style.display = "none";
        document.getElementById("feedback").textContent = "There was a transmission error. Try again.";
        console.log(error);
    });
}