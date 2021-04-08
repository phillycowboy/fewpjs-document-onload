// Your code goes here
document.addEventListener('DOMContentLoaded', () => {
    let text = document.querySelector('#text');
    text.textContent = "This is really cool!";
})

// console.log('this loads after?') this will fires first before the DOMContentLoaded

// FOR WHEN DOMCONTENTLOADED DOESNT WORK FOR YOUR LAPTOP 

// The DOMContentLoaded event is now a widely accepted standard.Modern web development, however, provides us with additional choices for setting up when we want our JavaScript to execute.For example, HTML5 now has a defer(Links to an external site.) attribute for use in <script> tags: