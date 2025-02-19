var typed= new Typed(".text-1", {
    strings:[ "Full Stack Developer" , "Creative Technologist" , "Creative Code Ninja"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true        
});


//-------for contact form-------
function submitForm(event){
   event.preventDefault();
   const name = document.getElementById('name').value;
   const email = document.getElementById('email').value;
   const message = document.getElementById('message').value;

   const responseDiv = document.getElementById('response');
   responseDiv.innerHTML = `<strong>Name:</strong> $(name)<br>
   <strong>Email:</strong> $(email)<br>
   <strong>Message:</strong> $(message)<br>`;

}