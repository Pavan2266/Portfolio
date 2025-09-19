// email connection code contect details

function sendEmail(){
emailjs.init({
  publicKey: "D516K3Y0tSzgY2Vo8",
});



const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const message = document.getElementById("message").value.trim();

const params = {
    from_name: name,
    from_email: email,
    message: message,
};

emailjs
    .send("service_lscvtqk", "template_ukjzki9", params)
    .then(function (){
        alert("Email sent");
    } )
    .catch( function () {
        alert("Failed to sent")
    });
}