{/* <div id="joke" class="joke">Get your next Joke ..</div>
        <button id="jokeBtn" class="bnt">Next Joke</button> */}


// Calling Fetch Api

// GET https://icanhazdadjoke.com/

const jokes = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');

// const NewJoke = () => {

//      const setHeader = {
//          headers: {
//              Accept: "application/json"
//          }
//      }



//      fetch('https://icanhazdadjoke.com/' , setHeader)
//      .then( (res) =>  res.json())
//     .then ( (data) =>{
//          jokes.innerHTML = data.joke;
//      }).catch ((e)=>{
//          console.log(e);
//      })
// }


const NewJoke = async () => {



    try{

        const setHeader = {
            headers: {
                Accept: "application/json"
            }
        }
    
    
    
      const res = await  fetch('https://icanhazdadjoke.com/' , setHeader);
      const jokeData = await res.json();
      
      jokes.innerHTML = jokeData.joke;
    }catch (e){
        console.log(e);
    }
   







  
}



jokeBtn.addEventListener('click' , NewJoke);
NewJoke();