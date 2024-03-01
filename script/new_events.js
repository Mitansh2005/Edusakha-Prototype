//declare all the variables here 
let data=[
  {
    "event_name": "Summer Picnic",
    "event_image" : "images/event 1.jpg",
    "event_description": "A fun-filled day of outdoor activities, delicious food, and great company to celebrate the sunny season.",
    "event_date": "2023-07-15"
  },
  {
    "event_name": "Tech Conference",
    "event_image" : "images/event 2.jpg",
    "event_description": "A gathering of industry experts, innovators, and enthusiasts to discuss the latest trends and technologies in the tech world.",
    "event_date": "2023-09-25"
  },
  {
    "event_name": "Art Exhibition",
    "event_image" : "images/event 3.jpg",
    "event_description": "A showcase of breathtaking artworks from local and international artists, featuring various mediums and styles.",
    "event_date": "2023-10-05"
  },
  {
    "event_name": "Charity Gala",
    "event_image" : "images/event 4.jpg",
    "event_description": "An elegant evening dedicated to raising funds for a noble cause, with live entertainment, auctions, and heartfelt speeches.",
    "event_date": "2023-11-12"
  },
  {
    "event_name": "Halloween Party",
    "event_image" : "images/event 5.jpg",
    "event_description": "A spooky celebration with costumes, creepy decorations, and thrilling activities to mark the haunted holiday.",
    "event_date": "2023-10-31"
  },
  {
    "event_name": "Halloween Party",
    "event_image" : "images/event 6.jpg",
    "event_description": "A spooky celebration with costumes, creepy decorations, and thrilling activities to mark the haunted holiday.",
    "event_date": "2023-10-31"
  },
  {
    "event_name": "Halloween Party",
    "event_image" : "images/event 7.jpg",
    "event_description": "A spooky celebration with costumes, creepy decorations, and thrilling activities to mark the haunted holiday.",
    "event_date": "2023-10-31"
  },
  {
    "event_name": "Halloween Party",
    "event_image" : "images/event 8.jpg",
    "event_description": "A spooky celebration with costumes, creepy decorations, and thrilling activities to mark the haunted holiday.",
    "event_date": "2023-10-31"
  },
  {
    "event_name": "Halloween Party",
    "event_image" : "images/event 9.jpg",
    "event_description": "A spooky celebration with costumes, creepy decorations, and thrilling activities to mark the haunted holiday.",
    "event_date": "2023-10-31"
  },
  {
    "event_name": "Halloween Party",
    "event_image" : "images/event 10.jpg",
    "event_description": "A spooky celebration with costumes, creepy decorations, and thrilling activities to mark the haunted holiday.",
    "event_date": "2023-10-31"
  },
  {
    "event_name": "Halloween Party",
    "event_image" : "images/event 11.jpg",
    "event_description": "A spooky celebration with costumes, creepy decorations, and thrilling activities to mark the haunted holiday.",
    "event_date": "2023-10-31"
  },
  {
    "event_name": "Halloween Party",
    "event_image" : "images/event 12.jpg",
    "event_description": "A spooky celebration with costumes, creepy decorations, and thrilling activities to mark the haunted holiday.",
    "event_date": "2023-10-31"
  },
  {
    "event_name": "Halloween Party",
    "event_image" : "images/event 13.jpg",
    "event_description": "A spooky celebration with costumes, creepy decorations, and thrilling activities to mark the haunted holiday.",
    "event_date": "2023-10-31"
  },
  {
    "event_name": "Halloween Party",
    "event_image" : "images/event 14.jpg",
    "event_description": "A spooky celebration with costumes, creepy decorations, and thrilling activities to mark the haunted holiday.",
    "event_date": "2023-10-31"
  }
]
let events=12;
 function event_desc(events){
 
  let event_loop='event_Description';
  let updater;
  for(let i=0;i<events;i++){
    updater=event_loop+(i+1);
    let describ=document.querySelector(`.${updater}`);
    // console.log(describ);
    describ.innerText=data[i].event_description;

  }
 }
event_desc(events);
export let described;
 function event_container(events){
 
  let event_loop='Events-list';
  let update_container;
  for(let i=0;i<events;i++){
    update_container=event_loop+(i+1);
    described=document.querySelector(`.${update_container}`);
    described.style.cssText=`
    width:50vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin-bottom:5vh;
    background-color: #97DFFC;
    padding:5vh;
    border-radius:3vh;
    cursor:pointer;
    font-family:'raleway';
    font-weight:bold;
    `;
    console.log(described);
    const divs=document.querySelector(`.${update_container}`);
    console.log(divs);
  
    divs.addEventListener('click',()=>{
      document.location="registered_events.html";
    })

  }
 }

event_container(events);


