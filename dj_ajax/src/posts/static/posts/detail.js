console.log('hello world detail')
const postBox = document.getElementById('post-box')
const backBtn = document.getElementById('back-btn')         // cleck event for back button
const updateBtn = document.getElementById('update-btn')
const deleteBtn = document.getElementById('delete-btn')
const url = window.location.href + "data/"
const spinnerBox = document.getElementById('spinner-box')

const titleInput = document.getElementById('id_title')
const bodyInput = document.getElementById('id_body')

backBtn.addEventListener('click', () =>{
    history.back()                  // it means back to main page
})

$.ajax({
    type: 'GET',
    url: url,
    success: function(response){
        console.log(response)
        const data = response.data

        if (data.logged_in !== data.author){        
            console.log('different')
        }
        else{
            console.log('same')
            updateBtn.classList.remove('not-visible')
            deleteBtn.classList.remove('not-visible')
        }

        // show the contents of post inside of new url page
        const titleEl = document.createElement('h3')
        titleEl.setAttribute('class', 'mt-1')

        const bodyEl = document.createElement('p')
        bodyEl.setAttribute('class', 'mt-1')

        titleEl.textContent = data.title        // assign title and body contents in new url contents
        bodyEl.textContent = data.body

        postBox.appendChild(titleEl)
        postBox.appendChild(bodyEl)

        titleInput.value = data.title           // in the situation oh update, take contents from page
        bodyInput.value = data.body

        spinnerBox.classList.add('not-visible')             // spinner is gone
    },
    error: function(error){
        console.log(error)
    }
})