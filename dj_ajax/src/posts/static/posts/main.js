console.log('hello world')

const helloWorldBox = document.getElementById('hello-world')
const postsBox = document.getElementById('posts-box')

// helloWorldBox.textContent = 'hello world'

// helloWorldBox.innerHTML = 'hello <b>world</b>'

$.ajax({
    type: 'GET',
    url: '/hello-world/',
    success: function(response){
        console.log('success', response.text)
        helloWorldBox.textContent = response.text
    },
    error: function(error){
        console.log('error', error)
    }
})

$.ajax({
    type: 'GET',
    url: '/data/',
    success: function(response){
        console.log(response)
        // const data = JSON.parse(response.data)
        // console.log(data)
        const data = response.data
        console.log(data)
        // how to print on web browser from dictionary
        data.forEach(el => { // this post box came from main.html
            postsBox.innerHTML += `     
                ${el.title} - <b>${el.body} </b><br>
                `
        });
    },
    error: function(error){
        console.log(error)
    }
})