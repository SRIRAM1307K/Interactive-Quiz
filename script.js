let submitBtn = document.getElementById("btn")
let btn2 = document.getElementById("btn2")
let result = document.getElementById("result")
let input = document.querySelectorAll("input")
let container = document.getElementById("container")
let container_2 = document.getElementById("container-2")
let close = document.getElementById("close")
let form = document.getElementById("form")
const radios = document.querySelectorAll('input[type="radio"]');
let resultSpan = document.getElementById("resultSpan")

const que1 = document.querySelectorAll('input[name="que1"]:checked')
const que2 = document.querySelectorAll('input[name="que2"]:checked')
const que3 = document.querySelectorAll('input[name="que3"]:checked')

submitBtn.addEventListener("click",function(){
    event.preventDefault();

        const ans = {
            que1: "a",
            que2: "a",
            que3: "a"
        }
        let score = 0
         for(let key in ans){
            let selected = document.querySelector(`input[name="${key}"]:checked`)
            if(selected && selected.value === ans[key]){
                score++
            }
            }
 
    
    
         const result = document.getElementById("result")
         result.textContent=`Score: ${score}`
         if(score>2){
            result.style.color="Green"
         }else if(score>1){
            result.style.color="#FFB22C"
         }else{
            result.style.color="Red"

         }
    




     const anyAnswered = Object.keys(ans).some(q =>
        document.querySelector(`input[name="${q}"]:checked`)
      );
    
      if (!anyAnswered) {
        alert('Please answer all the questions before submitting!');
        return;
      }else{
    container_2.style.display="block"
     container.style.display="none"
      }

         


})


btn2.addEventListener("click",function(){
    form.reset()
})

close.addEventListener("click", function(){
         container_2.style.display="none"
     container.style.display="block"
     form.reset()
})