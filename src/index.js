// write a function that will load content on the DOM
const initialize= () => {
    // write a function that fetchs questions from the local server
}
    // function for countdown
    const timeM = document.querySelector('h2');
    let timeSecond = 5;

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