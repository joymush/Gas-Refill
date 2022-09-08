// write a function that will load content on the DOM
const initialize= () => {
    // write a function that fetchs questions from the local server
    function fetchInformation() {

        let submit = document.getElementsByClassName("form-center")
        submit.addEventListener("submit", (e)=> {
            e.preventDefault();
            const input=document.getElementById('input_section')
            fetch(`http://localhost:3000/information/${input.value}`)
            .then((res) => res.json())
            .then((data) => setInformation(data))
        })

     }fetchInformation()

     let input_box1;
     let input_box2;
     let input_box3;
     let input_box4;

     input_box1.addEventListener("click",chooseAnswer)
     input_box2.addEventListener("click",chooseAnswer)
     input_box3.addEventListener("click",chooseAnswer)
     input_box4.addEventListener("click",chooseAnswer)

     input_box1=choice1.innerHtml
     input_box2=choice2.innerHtml
     input_box3=choice3.innerHtml;
     input_box4=choice4.innerHtml;     
}