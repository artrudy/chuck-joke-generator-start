const jokeBTN = document.getElementById("joke-btn");

jokeBTN.addEventListener('click', getJoke);

function getJoke(){
    let newJoke = new XMLHttpRequest();

    newJoke.open('GET', 'https://api.chucknorris.io/jokes/random');

    newJoke.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            let data = JSON.parse(this.responseText)
            // console.log(data.value)
            document.querySelector(".joke").innerHTML = data.value;    
        }
    }
    newJoke.send();
}


