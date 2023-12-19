const display = document.querySelector('input');
let buttons = document.querySelectorAll('.button');
let string= "";

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
       
        if(e.target.innerHTML == '='){
            if(string==""){
                display.value="";
            }
            else{
            string = eval(string);           
            display.value = string;
            }
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            display.value = string;
        }
        else if(e.target.innerHTML == '%'){
            string = string/100;
            display.value = string;
        }
        else if(e.target.innerHTML == 'DE'){
            string = string.slice(0, -1);
            display.value = string;
        }
        else{
        console.log(e.target);
        string = string + e.target.innerHTML;
        display.value = string;
        }

    })   
})

