const btn = Array.from(document.querySelector(".buttons").children)
const theme = document.querySelectorAll(".switch div")
const body = document.querySelector("body")
// const theme = document.querySelector(".switch")

const mainDisplay = document.querySelector(".display h1")
const primaryDisplay = document.querySelector(".display span")

function hidden(num) {
    for(let i = 0; i < 3; i++){
        if(i === num){
            theme[i].classList.remove("hidden")
            body.classList.add(`theme-${i+1}`) 
        } 
        else{
            theme[i].classList.add("hidden") 
            body.classList.remove(`theme-${i+1}`)
        }
    }
}
theme[0].addEventListener('click',()=>{hidden(0)})
theme[1].addEventListener('click',()=>{hidden(1)})
theme[2].addEventListener('click',()=>{hidden(2)})

const reset = ()=>num1 = num2 = ans = 0
const clear = ()=>mainDisplay.innerText="0"
const del = ()=>mainDisplay.innerText=(parseInt(mainDisplay.innerText/10))
const display = (num)=>{
        if(mainDisplay.innerText <= 9999999 && mainDisplay.innerText >= -9999999){
            if(mainDisplay.innerText == "0"){
                mainDisplay.innerText = num
            }
            else{
                mainDisplay.innerText += ""+num
            }   
        }
}

let num1 = 0
let num2 = 0
let ans = 0
btn.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        const input = e.target.attributes.class.ownerElement.innerText;

        if(input >= 0 && 10 > input)display(input)
        else if(input == "RESET"){
            reset()
            clear()
        }
        else if(input == "DEL")del()
        else if(input === "+"){
            num1 += parseFloat(mainDisplay.innerText)
            clear()
        }
        else if(input === "="){
            num2 = parseFloat(mainDisplay.innerText)
            ans = num1+num2
            // display(ans);
            mainDisplay.innerText = ans
            reset()
        }

    })
})