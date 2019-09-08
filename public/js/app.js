// Front End JS



const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

// messageOne.textContent = ''


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault() // prevents page refresh after button click
    
    const location = search.value

    messageTwo.textContent = 'Loading'
    fetch('http://localhost:3000/weather?address=' + location).then( (response) => {
    response.json().then( (data) => {
        if(data.error){
            messageOne.textContent = ''
            messageTwo.textContent = data.error
        } else {
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
        }
    })
})
})

