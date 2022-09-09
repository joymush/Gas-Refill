// write a function that will load content on the DOM
const initialize= () => {
} 
// write a function that fetchs questions from the local server
    const api_url = "http://localhost:3000/information";
    async function getUser() {

        const data = await Response.json();
        console.log(data.results);
        
        const user = data.results[0];
        let {placeof_residence, nameof_flats } = user;
        let {house_number, contact_number } = user.location;

        document.getElementById("place").innerHTML = placeof_residence;
        document.getElementById("flats").innerHTML = nameof_flats;
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