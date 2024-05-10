const firebaseConfig = {
    apiKey: "AIzaSyCBrxrGn2RpDQ9ANN9nILWdG5ZjDeZqNis",
    authDomain: "envirovista-e48ae.firebaseapp.com",
    databaseURL: "https://envirovista-e48ae-default-rtdb.firebaseio.com",
    projectId: "envirovista-e48ae",
    storageBucket: "envirovista-e48ae.appspot.com",
    messagingSenderId: "138210059552",
    appId: "1:138210059552:web:af7297420f00087cd12345"
  };


firebase.initializeApp(firebaseConfig);


var messform=firebase.database().ref("experience-form");

document.getElementById("experience-form").addEventListener("submit",submitform);

function submitform(e){
    e.preventDefault();

    var name=document.getElementById("naam").value;
    var email=document.getElementById("ema").value;
    var text=document.getElementById("te").value;


    saveMessage(name,email,text);


    //enable alert

    document.querySelector('.alert').style.display="block";

    //remove alert

    setTimeout(()=>{
        document.querySelector('.alert').style.display="none";

    },3000);

    document.getElementById("experience-form").reset()


    
   

}

//store to database
const saveMessage=(name,email,text)=>{
    var newConcatForm=messform.push();

    newConcatForm.set({
        name:name,
        email:email,
        text:text
    })
}

