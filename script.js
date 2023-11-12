// Redes footer
const menu=document.querySelector(".menu");
const toggle=document.querySelector(".toggle");
toggle.addEventListener("click",()=>{
  menu.classList.toggle("active");
})
// Menu hamburguesa
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.querySelector(".navLinks");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

//API Trivia

window.onload = sendApiRequest

async function sendApiRequest(){
  let response = await fetch(`https://opentdb.com/api.php?amount=1&category=18&difficulty=hard&type=multiple`);
  console.log(response)
  let data = await response.json()
  console.log(data)
  useApiData(data)
}

function useApiData(data){
  document.querySelector('#question').innerHTML = `QUESTION: ${data.results[0].question}`
  document.querySelector('#answer1').innerHTML = data.results[0].correct_answer
  document.querySelector('#answer2').innerHTML = data.results[0].incorrect_answers[0]
  document.querySelector('#answer3').innerHTML = data.results[0].incorrect_answers[1]
  document.querySelector('#answer4').innerHTML = data.results[0].incorrect_answers[2]
}

let correctButton = document.querySelector('#answer1')

correctButton.addEventListener('click', () =>{
  alert('GANASTE UN 15% OFF! Usá el código: "MENRESTGEEK" en cualquiera de nuestras sucursales')
  sendApiRequest()
})

let inCorrectButton = document.querySelector('#answer2, #answer3, #answer4');

inCorrectButton.addEventListener('click', ()=>{
  alert('Lo siento, la respuesta es INCORRECTA. Vuelva a intentarlo :(')
  sendApiRequest()
})