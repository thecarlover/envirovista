const firebaseConfig = {
    apiKey: "AIzaSyCBrxrGn2RpDQ9ANN9nILWdG5ZjDeZqNis",
    authDomain: "envirovista-e48ae.firebaseapp.com",
    databaseURL: "https://envirovista-e48ae-default-rtdb.firebaseio.com",
    projectId: "envirovista-e48ae",
    storageBucket: "envirovista-e48ae.appspot.com",
    messagingSenderId: "138210059552",
    appId: "1:138210059552:web:af7297420f00087cd12345"
  };









// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to the Firebase database
var database = firebase.database();

// Function to handle form submission
document.getElementById("question-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Push data to Firebase database
    var questionRef = database.ref("question-info").push();
    questionRef.set({
        name: name,
        email: email,
        message: message
    })
    .then(function() {
        // Reset form after successful submission
        document.getElementById("question-form").reset();
        // Show alert for successful submission
        document.querySelector('.alert').style.display = "block";
        // Hide alert after 3 seconds
        setTimeout(function() {
            document.querySelector('.alert').style.display = "none";
        }, 3000);
    })
    .catch(function(error) {
        // Handle errors
        console.error("Error submitting question information:", error);
        // Optionally display an error message
    });
});
