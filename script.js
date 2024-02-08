let string="";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string = string.replace(/X/g, '*').replace(/÷/g, '/');
            string=eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'C'){
            string=""
            document.querySelector('input').value = string;
            
        }
        else{
        console.log(e.target)
        if (e.target.innerHTML === '*') {
            string = string + 'X';
        } 
        else if (e.target.innerHTML === '/') {
            string = string + '÷';
        }
        else {
        string=string+e.target.innerHTML;
        }
        document.querySelector('input').value=string;
    }
})
})