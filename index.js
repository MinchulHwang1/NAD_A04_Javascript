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