
   let currentLevel = 0;
   let levelProgress = 0;
   let answer = "";

   showRebus(rebus0);
   
let formInput = document.getElementById("formInput");
let formBTN = document.getElementById("formBTN");
let answers = [
   "4",
   "144",
   "216",
   "12",
   "16"
]
function showRebus(classBlock){
   document.getElementById(classBlock);
   classBlock.classList.add('active');  
}
formBTN.addEventListener('click', function(event){
  event.preventDefault();
  let inputText = formInput.value;
  if(inputText == answers[levelProgress]){
   console.log("aboba");
   levelProgress++;

   let temp = document.getElementById(`rebus${levelProgress}`);
        showRebus(temp); 

   let numwidht = 100 * levelProgress - 90;
   $('#progBar').css('width', numwidht);

   if(levelProgress == answers.length){
      console.log("aboba2131312s");
      $('#winAction').toggle();
   }
        
 }else{ 

   alert("НЕ ПРАВИЛЬНО!");
}
});

