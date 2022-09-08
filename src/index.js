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
    }
}