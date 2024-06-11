function calculate(){
    setInterval(()=>{
       let birthdate = new Date(document.getElementById('birthdate').value);

       let now =new Date();
       let ageInMs = now.getTime() - birthdate.getTime();

       let ageInS =ageInMs / 1000;
       let ageInMins = ageInS / 60 ;
       let ageInHours = ageInMins / 60;
       let ageInDays = ageInHours / 24;
       let ageInMonths= ageInDays /30.4375;
       let ageInYears = ageInMonths / 12;
        document.querySelector('#years').innerHTML = Math.floor(ageInYears);
        document.querySelector('#months').innerHTML = Math.floor(ageInMonths % 12);
        document.querySelector('#days').innerHTML = Math.floor(ageInDays % 30.4375);
        document.querySelector('#hours').innerHTML = Math.floor(ageInHours % 24);
        document.querySelector('#mins').innerHTML = Math.floor(ageInMins % 60);
        document.querySelector('#sec').innerHTML = Math.floor(ageInS % 60 );
        // document.querySelector('#sec'). = ;


    },1000);

}

function reset(){
  window.location.reload();
}