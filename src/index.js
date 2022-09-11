// write a function that will load content on the DOM
const initialize= () => {
} 
// function for countdown
    const timeM = document.querySelector('h2');
    let timeSecond = 10;

    displayTime(timeSecond)

    const countDown = setInterval (()=>{
        timeSecond--;
        displayTime(timeSecond);
        if(timeSecond<= 0 || timeSecond < 1){
            endTime();
            clearInterval(countDown);
        }
    },1000)

    function displayTime(second){
        const min = Math.floor(second / 60);
        const sec = Math.floor(second % 60);
        timeM.innerHTML = `${min<10 ? '0': ''}${min}:${sec<10 ? '0': ''}${sec}`
    }
    function endTime(){
        timeM.innerHTML = 'DELIVERED'
    }
// write function for order received alert
    var pressedButton = document.getElementsByClassName("onclick")[0];
    pressedButton.addEventListener("click", function (event) {
        alert("Successful Order!We will deliver in 5 minutes")
    })

// write function for submit received alert
    var pressedButton = document.getElementsByClassName("button")[0];
    pressedButton.addEventListener("click", function (event) {
        alert("Sizes Selected Available")
    })

// create a comment node and add it to the document
    var feild = document.querySelector('textarea');
    var backUp = field.getAttribute('placeholder');
    var btn = document.querySelector('.btn');
    var clear = document.getElementById('clear')

    feild.onfocus = function(){
        this.setAttribute('placeholder', '');
        this.style.borderColor = '#333';
        btn.style.display = 'block';
    }

    feild.onblur = function() {
        this.setAttribute('placeholder',backUp)
    }

    clear.onclick = function(){
        btn.style.display = 'none';
        field.value = '';
    }
// add function for like
    function myFunction(x) {
        x.classList.toggle("fa-thumbs-down");
    }
//git add 
