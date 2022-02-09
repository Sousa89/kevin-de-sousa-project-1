// BLOG PAGE COMMENT SECTION 
let commentForm = document.querySelector(`#commentForm`);
console.log(commentForm)

const fullName = commentForm.name
const email = commentForm.email
const message = commentForm.message

console.log(email)
console.log(commentForm)
commentForm = addEventListener(`submit`, function(e) {
  e.preventDefault();

  // values from forms
nameInput = fullName.value;
console.log(nameInput)
emailInput = email.value;
console.log(emailInput)
messageInput = message.value;
console.log(messageInput)
console.log(`form has been submitted`)

// return `Thanks for leaving a comment ${nameInput}`,

// document.querySelector(commentForm)

const blogDiv = document.querySelector(`.blogComments`)

const commentsBox = document.createElement(`div`)
commentsBox.classList.add(`commentsBox`, `commentsBottom`)

// for img container
const imgContainer = document.createElement(`div`)
imgContainer.classList.add(`imgContainer`)
// for img tag
const commentsImg = document.createElement(`img`)
commentsImg.src = `https://placekitten.com/89/89`


const commentsText = document.createElement(`div`)
commentsText.classList.add(`commentsText`)

const commentsDate = document.createElement(`p`)
const commentsMessage = document.createElement(`p`)

const date = new Date()

blogDiv.appendChild(commentsBox)

commentsBox.appendChild(imgContainer)
imgContainer.appendChild(commentsImg)

commentsBox.appendChild(commentsText)
commentsText.appendChild(commentsDate)
commentsText.appendChild(commentsMessage)

commentsDate.textContent = `${date} by ${nameInput}`
commentsMessage.textContent = messageInput
// document.getElementsByClassName(`blogcomments`).appendChild

document.querySelector(`button`).textContent = `Thanks for commenting ${nameInput}!`;
})



// CONTACT PAGE 

