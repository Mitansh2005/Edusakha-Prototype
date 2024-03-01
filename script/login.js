
//Functions and code to perform sign up of user
var token;
const signform=document.getElementById('sign_up_form');

if(signform){
console.log('hi');
const registeration_url = "http://localhost:8000/api/user/register/" ;
function Signup(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the values from the email and password fields

  const email = document.getElementById('email').value;
  const name = document.getElementById('name').value;
  const password = document.getElementById('password').value;
  const password2 = document.getElementById('password-confirm').value;
  // Define the data to be sent in the request body
  const requestData = {
    email: email,
    name: name,
    password: password,
    password2: password2
  };


  // Define the options for the fetch() function
  const fetchOptions = {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json', // Content type of the request body
    },
    body: JSON.stringify(requestData) // Convert data to JSON string
  };

  // Send the POST request using the fetch() function
  fetch(registeration_url, fetchOptions)
    .then(response => {
      // Check if the response is successful
      if (!response.ok) {
        throw new Error('Incorrect attempt. Try again');
      }
      // Parse the JSON response
      return response.json();
    })
    .then(data => {
      // Handle the data returned from the API
      console.log('Response from API:', data);
      // document.location='home.html';
      token=data.token;
      localStorage.setItem('Refresh Token',token.refresh);
      localStorage.setItem('Access Token',token.access);
      // document.location="login.html";
    })
    .catch(error => {
      // Handle any errors that occurred during the fetch operation
      console.error('Error:', error);
    });
}

signform.addEventListener('submit',Signup);
}
else{


// All required elements are stored in variable here
const loginbtn=document.getElementById('login-button');
const signupbtn=document.getElementById('signup-button');
signupbtn.addEventListener('click',(event)=>{
  event.preventDefault();
  document.location='sign_up.html';
})
const authToken= localStorage.getItem('Access Token');
const apiUrl = 'http://localhost:8000/api/user/login/';

// Function to handle form submission

async function handleSubmit(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  
  // Get the values from the email and password fields
  const email = document.getElementById('email_id').value;
  const password = document.getElementById('password').value;
  // Define the data to be sent in the request body
  const requestData = {
    email: email,
    password: password
  };



  // Define the options for the fetch() function
  const fetchOptions = {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json', // Content type of the request body
      'Authorization': `Bearer ${authToken}` // Include the authentication token in the request headers
    },
    body: JSON.stringify(requestData) // Convert data to JSON string
  };

  // Send the POST request using the fetch() function
  await fetch(apiUrl, fetchOptions)
    .then(response => {
      // Check if the response is successful
      if (!response.ok) {
        throw new Error('Incorrect attempt. Try again');
      }
      // Parse the JSON response
      return response.json();
    })
    .then(data => {
      // Handle the data returned from the API
      document.location='home.html';
      localStorage.removeItem('Access Token');
    })
    .catch(error => {
      // Handle any errors that occurred during the fetch operation
      console.error('Error:', error);
    });
}

// Add an event listener to the form for the submit event
document.getElementById('loginform').addEventListener('submit',handleSubmit);
}


