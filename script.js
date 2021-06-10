let Calculation = document.getElementById('Calculation');
let buttons = document.querySelectorAll('button');
let Result = document.getElementById('Result');
let CalculationValue = '';
for(let i of buttons){
   i.addEventListener('click', (e)=>{
       buttonText = e.target.innerHTML;

       if(buttonText === 'CE'){
           Result.innerHTML = "";
           Calculation.innerHTML = "";
       }
       else if(buttonText === 'C'){
           let currentstr = Calculation.innerHTML
           let updatestr = currentstr.substring(0, currentstr.length-1);
           Calculation.innerHTML = updatestr;
    }

      else if(buttonText === '='){
        Result.innerHTML = eval(Calculation.innerHTML);
       }
       else{
           CalculationValue = Calculation.innerHTML + buttonText;
           Calculation.innerHTML =  CalculationValue;
       }
   }
   )
}
 




















