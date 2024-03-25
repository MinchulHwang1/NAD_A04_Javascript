console.log('hello world')

//console.log(document)  // document object that creates browser

const testEl = document.getElementById('text-el')

testEl.textContent = 'bye bye'

//////////////// in event listener, click and receive event will be learned

testEl.addEventListener('click', () =>{
    console.log('clicked')              // when the textContent is clicked
    testEl.innerHTML = "<b>clicked</b>" // the letter witten before 'byebye' will be changed as clicked

})

testEl.addEventListener('mouseover', ()=>{  // when mouse is over the textContent
    console.log('on')                       // the log will be occurred (in this case - on)
})

testEl.addEventListener('mouseout', ()=>{    // when mouse is our from the textContent
    console.log('off')                       // the log will be occurred (in this case - off)
})

document.addEventListener('scroll', ()=>{
    const positionY = window.scrollY        // when we scroll the mouse,
    console.log(positionY)                  // the log record the position of mouse(y)
})

// GET the data with ajax
const url = 'https://swapi.dev/api/people/'


// 1. jquery ajax method <- this is what we are going to use in this course

$.ajax({                                        // get ajax from url.
    type: 'GET',
    url: url,
    success: function(response){                // if success, record log response
        console.log('jquery ajax', response)
    },
    error: function(error){                     // or record log error
        console.log(error)
    }
})


// 2. XMLHttpRequest
const req = new XMLHttpRequest()
req.addEventListener('readystatechange', ()=>{
    if(req.readyState === 4){           // request is completed and response is ready
                                        // 0 is request is not yet initialized
                                        // 1 is server connection is created
                                        // 2 is request has been received
                                        // 3 is request is processing

        console.log('xhttp', JSON.parse(req.responseText))          // it needs to parse by JSON to readable
    }
})

req.open('GET', url)
req.send()
// this is request of XML on http, it needs to open and send method


// 3. fetch method
fetch(url)
.then(resp=>resp.json()).then(data => console.log('fetch', data))
.catch(err => console.log(err))
// fetching the url, and then take response to json method
// if there is error, catch that error 

// other popular : axios library, async await + fetch