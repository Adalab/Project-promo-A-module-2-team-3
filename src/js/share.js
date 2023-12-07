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
  previewLinkedin.href = data.linkedin;
});

githubInput.addEventListener("input", (event) => {
  data.github = event.currentTarget.value;
  previewGithub.href = data.github;
});
