const textview = document.getElementsByName("textview")
console.log(textview)
// document.getElementsByName
function insert(num){

    let myString=document.forms[0].textview.value;
    console.log(myString);

    let lastchar=myString[myString.length -1];

    if(myString.length<30){
        if(!isNaN(lastchar) || lastchar==null || !isNaN(num)){
            document.forms[0].textview.value=myString+num;
        }
        else if(num !==lastchar){
            document.forms[0].textview.value=myString.replace(lastchar,num);
        }
    }

}

function equal(){
    let sum=document.forms[0].textview.value;
    if(sum){
        document.forms[0].textview.value=eval(sum);//داله فى الجافا بتعمل عمليات حسابيه 
    }

    
}

function clean(){
    document.forms[0].textview.value='';

}
function back(){
    let exp=document.forms[0].textview.value;
    document.forms[0].textview.value=exp.substring(0,exp.length-1);
}