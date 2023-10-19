// Function to open the modal
function openModal(accountNumber, accountName, bankName) {
    document.getElementById("accountNumber").textContent = accountNumber;
    document.getElementById("accountName").textContent = accountName;
    document.getElementById("bankName").textContent = bankName;
    document.getElementById("subscribeModal").style.display = "block";
}

// Attach the "SUBSCRIBE" button click event listeners
document.getElementById("subscribeButton1").addEventListener("click", function() {
    openModal("1234567890", "Your Name", "Your Bank");
});
document.getElementById("subscribeButton2").addEventListener("click", function() {
    openModal("0987654321", "Your Name", "Your Bank");
});
document.getElementById("subscribeButton3").addEventListener("click", function() {
    openModal("5678901234", "Your Name", "Your Bank");
});

// Function to close the modal
document.getElementById("closeModal").addEventListener("click", function() {
    document.getElementById("subscribeModal").style.display = "none";
});

// Function to handle the upload button
document.getElementById("uploadButton").addEventListener("click", function() {
    // You can add code here to handle the uploaded image
    // This can involve sending it to a server for processing or storing it locally.
    alert("Image uploaded successfully. You will receive an email once payment is confirmed.");
});
