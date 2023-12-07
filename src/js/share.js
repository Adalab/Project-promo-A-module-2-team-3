console.log("share");

const nameInput = document.querySelector(".js_nameInput");
const previewFullName = document.querySelector(".js_previewName");
const jobInput = document.querySelector(".js_jobInput");
const previewJob = document.querySelector(".js_previewJob");
const emailInput = document.querySelector('.js_emailInput');
// const previewEmail = ;
const phoneInput = document.querySelector('.js_phoneInput');
// const previewPhone = ;
const linkedinInput = document.querySelector('.js_linkedinInput');
// const previewLinkedin = ;
const githubInput = document.querySelector('.js_githubInput');
// const previwGithub = ;



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
    previewEamil.href = 'mailto: ' + data.email;
  });

  phoneInput.addEventListener("input", (event) => {
    data.phone = event.currentTarget.value;
    previewPhone.href = data.phone;
  });