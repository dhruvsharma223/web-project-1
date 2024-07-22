document.addEventListener("DOMContentLoaded", () => {
   const submitbtn = document.getElementById('submitbtn'); // Correctly select the button by its ID

   const getInfo = (event) => {
       event.preventDefault(); // Prevent form submission
       console.log('hello');
   }

   submitbtn.addEventListener('click', getInfo); // Use addEventListener to attach the event
});