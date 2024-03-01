//declare all the variables up here
const homeBtn=document.querySelector('.logo');  

const newEventBtn=document.querySelector('.newEvents-buttons');

const registeredEventsBtn=document.querySelector('.registeredEvents-buttons');

const addEventsBtn=document.querySelector('.addEvents-buttons');

const logoutBtn=document.querySelector('.logout');



//eventlistner to make navbar buttons responsive
homeBtn.addEventListener('click',()=>{
  document.location='home.html';
})
newEventBtn.addEventListener('click',()=>{
  document.location='new_events.html';
})
registeredEventsBtn.addEventListener('click',()=>{
  document.location='registered_events.html';
})
addEventsBtn.addEventListener('click',()=>{
  document.location='add_events.html'
})
logoutBtn.addEventListener('click',()=>{
  document.location='login.html';
})

