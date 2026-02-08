 const display =document.getElementById("display");
        function addToDisplay(input) {
            display.value += input;
        }

        function calculate(){
            display.value =  eval (display.value);
        }

        function clear1(){
            display.value = "";
        }