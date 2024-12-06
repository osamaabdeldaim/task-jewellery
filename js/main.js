
function  validate()
{
    var userName= document.getElementById("username").value;
    var email= document.getElementById("email").value;
    var password= document.getElementById("password").value;
    var confirm= document.getElementById("conf-pass").value;
    var result = document.getElementById("result");


    result.style.padding= "10px";
    result.style.backgroundColor= "#e30";
    result.style.color ="#fff";
    result.style.textAlign="center";
    result.style.transition= "all 1s ease";
    result.style.marginBottom="20px";

    

if( email=="" && userName=="" && password=="" && confirm==""){

   
    result.innerHTML ="please enter your data to sign ";
    return false;
}
else if(userName.length <5 || userName.length >15){
    result.innerHTML ="please enter 5-15 character in username";
    return false;
}

else if(email.indexOf('@')==-1 || email.indexOf('.com')==-1){
    result.innerHTML= "Please Enter Email";
    return false;
}else if (password.length<8){
    result.innerHTML ="please enter at least 8 character in password";
    return false;
}

else if(password != confirm){
    result.innerHTML= "please enter same password";

    return false;
}
else{
   
    return true;
}


}




