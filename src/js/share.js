console.log("share");

const nameInput = document.querySelector(".js_nameInput");
const previewFullName = document.querySelector(".js_previewName");
const jobInput = document.querySelector(".js_jobInput");
const previewJob = document.querySelector(".js_previewJob");
const phoneInput = document.querySelector(".js_phoneInput");
const previewPhone = document.querySelector(".js_mobile");
const emailInput = document.querySelector(".js_emailInput");
const previewEmail = document.querySelector(".js_mailto");
const linkedinInput = document.querySelector(".js_linkedinInput");
const previewLinkedin = document.querySelector(".js_linkedin");
const githubInput = document.querySelector(".js_githubInput");
const previewGithub = document.querySelector(".js_github");

const btnCreateCard = document.querySelector('.js_btnCreateCard');
const shareResponseContainer = document.querySelector('.js_shareLinkContainer');
const js_shareLinkContainer = document.querySelector('.js_shareLinkContainer');


function handleClickCreate (event){
event.preventDefault()
console.log('crear tarjeta');

fetch('https://dev.adalab.es/api/card/', {
  method: 'POST',
  headers: {'Content-Type': 'application/json' },
  body: JSON.stringify(data)
})
.then(response => response.json())
.then(dataResponse =>{
  console.log(dataResponse)

  if ( dataResponse.success ) {
    

  } else{
    //mostrar mensaje de error 
  }

})
}


nameInput.addEventListener("input", (event) => {
  data.name = event.currentTarget.value;
  previewFullName.innerHTML = data.name;
});

jobInput.addEventListener("input", (event) => {
  data.job = event.currentTarget.value;
  previewJob.innerHTML = data.job;
});

emailInput.addEventListener("input", (event) => {
  data.email = event.currentTarget.value;
  previewEmail.href = "mailto: " + data.email;
});

phoneInput.addEventListener("input", (event) => {
  data.phone = event.currentTarget.value;
  previewPhone.href = data.phone;
});

linkedinInput.addEventListener("input", (event) => {
  data.linkedin = event.currentTarget.value;
  previewLinkedin.href = `https://www.linkedin.com/in/${data.linkedin}/`;
  console.log(previewLinkedin.href);
});

githubInput.addEventListener("input", (event) => {
  data.github = event.currentTarget.value;
  previewGithub.href = `https://github.com/${data.github}`;
});


btnCreateCard.addEventListener ('click', (handleClickCreate));