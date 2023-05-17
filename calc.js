
let a =''; //first number
let b =''; //second number
let sign = ''; //operation

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/'];



  
//display
if (typeof document !== 'undefined') {
    let element = document.querySelector('.class-name')
    
    // Manipulating the DOM here
 }
const out = document.querySelector('.calc-screen p');
function clearAll () {
    a = ''; //first number and result
    b = ''; //second number
    sign = ''; //operation
    finish = 'false';
    out.textContent = 0;

}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.button').onclick = (event) =>{
    if (!event.target.classList.contains('btn')) return; //clicking on empty space
    if (event.target.classList.contains('ac')) return; //clicking on ClearAll

    out.textContent ='';
    //getting the meaning of clicked button
    const key = event.target.textContent;

    //clicking on number or dot
    if (digit.includes(key)) {
        if (b==="" && sign==="") {
            a+=key; 

            out.textContent=a;
        }
        else if (a!=="" && b!=="" && finish){
            b=key;
            finish = false;
            out.textContext = b;


        }else {
            b+=key;
            out.textContent = b;
        }
        console.log(a, b, sign);
        return;
    }

     //clicking on sign(+-/X)
     if (action.includes(key)) {
        sign+=key;
        out.textContent=sign;
        console.log(a, b, sign);
        return;
    }

    //clicking on =
    if (key==="=") {
        if (b==="") b=a;
        switch (sign) {
            case "+":
                a =(+a) + (+b);
                break;

            case "-":
                a =a - b;
                break;
 
            case "X":
                a =a * b;
                break;
            case "/":
                if (b==='0') {
                    out.textContent ="Error";
                    a="";
                    b="";
                    sign="";
                    return;
                }
                a = a / b;
                break;    
        }
        finish = true;
        out.textContent = a;
        console.log (a,b, sign);
    }

}



