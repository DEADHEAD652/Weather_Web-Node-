const weatherForm = document.querySelector('form')
const Searched = document.querySelector('input')
const messageOne = document.querySelector('#msgOne')
const messageTwo = document.querySelector('#msgTwo')

// messageOne.textContent= 'From js'



weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const location = Searched.value
     messageOne.textContent= 'Loading...'
      messageTwo.textContent= ''


    fetch('http://localhost:3000/weather?address=' + location).then(response => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
               messageTwo.textContent = data.location
               messageOne.textContent = data.forecast.message
                

            }
        })
    })



})