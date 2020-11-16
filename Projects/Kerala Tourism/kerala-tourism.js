//email validation
let email;
let psw;
let logBtn;
let reg;
let eMsg;
let pMsg;

logBtn=document.getElementById("log-button");

//email validation
function eValidation(){
    email=document.getElementById("email");
    eMsg=document.getElementById("email-msg");

    console.log("rtrt"+email.value);
    if(email.value=="")
    {
        eMsg.innerHTML="Please fill the field";
        email.style.borderColor= "red";
        //alert("empty");
    }
    else
    {
        email.style.borderColor= "#f6f6f6";
        email.placeholder="Email ID";
    }

    reg=/^([A-Za-z0-9])+([a-zA-Z0-9\.\-\_])+\@([a-zA-])+\.(com|co\.in|in)+/;
    if(reg.test(email.value))
    {
        eMsg.innerHTML="";
        return true;
    }
    else{
        eMsg.innerHTML="Invalid email format";
        email.style.borderColor= "red";
    }

}
//form validation
function formValidation()
{
    
    eValidation();
    psw=document.getElementById("password");
    pMsg=document.getElementById("psw-msg");
    if((psw.value).length>=8)
    {
        pMsg.innerHTML="";
        return true;
    }
    else
    {
        pMsg.innerHTML="Invalid pass";
        return false;
    }
}

//registration form
let name=document.getElementById("name");
let rpsw=document.getElementById("nPassword");
let repsw=document.getElementById("rePassword");
let mob=document.getElementById("mobile");
let nam=document.getElementById("name");
let nameMsg=document.getElementById("name-msg");

function nameVal()
{
    if((/[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/).test(nam.value))
    {
        nameMsg.innerHTML="";
        name.style.borderColor= "";
        return true;

    }
    else
    {
        name.style.borderColor= "red";
        nameMsg.innerHTML="Invalid name";
    }

}
function mobileV()
{
    
    let mobmsg=document.getElementById("mob-msg");
    let mobileReg=/^([9876][0-9]{9})+/;
    let mobileReg2=/^([0-9]{3}[\-|\ |\.]{0,1})([0-9]{3}[\-|\ |\.]{0,1})([0-9]{4})/;
    if(mobileReg.test(mob.value)||mobileReg2.test(mob.value))
    {
        mobmsg.innerHTML="";
        return true;
    }
    else
    {
        mobmsg.innerHTML="Enter a valid mobile number";
    }
}
//password strength
function strength()
{
   let strengthMsg= document.getElementById("npass-msg")
   let mark = document.getElementById("mark");
    var no=0;
    if((rpsw.value)!="")
    {
     // If the password length is less than or equal to 6
     if((rpsw.value).length<=6)no=1;
   
     // If the password length is greater than 6 and contain any lowercase alphabet or any number or any special character
     if((rpsw.value).length>8 && ((rpsw.value).match(/[a-z]/) || (rpsw.value).match(/\d+/) || (rpsw.value).match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)))no=2;
   
     // If the password length is greater than 6 and contain alphabet,number,special character respectively
     if((rpsw.value).length>8 && (((rpsw.value).match(/[a-z]/) && (rpsw.value).match(/\d+/)) || ((rpsw.value).match(/\d+/) && (rpsw.value).match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)) || ((rpsw.value).match(/[a-z]/) && (rpsw.value).match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/))))no=3;
   
     // If the password length is greater than 6 and must contain alphabets,numbers and special characters
     if((rpsw.value).length>8 && (rpsw.value).match(/[a-z]/) && (rpsw.value).match(/\d+/) && (rpsw.value).match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/))no=4;


     if(no==1)
     {
        strengthMsg.innerHTML="Very Week";
        strengthMsg.style.color="red";
        mark.style.backgroundColor="red";
        mark.style.width="80px";
     }
     if(no==2)
     {
        strengthMsg.innerHTML="Week";
        strengthMsg.style.color="#ff8200";
        mark.style.backgroundColor="#ff8200";
        mark.style.width="160px";
     }
     if(no==3)
     {
        strengthMsg.innerHTML="Good";
        strengthMsg.style.color="#d6ff00";
        mark.style.backgroundColor="#d6ff00";
        mark.style.width="240px";
        return true;
     }
     if(no==4)
     {
        strengthMsg.innerHTML="Strong";
        strengthMsg.style.color="#00ea00";
        mark.style.backgroundColor="#00ea00";
        mark.style.width="318px";
        return true;
     }
    }
}
//confirm password
function confirm()
{
    let repswMsg=document.getElementById("rpass-msg");
        if((rpsw.value)==(repsw.value))
        {
            repswMsg.innerHTML="";
            return true;
         }
         else
         {
            repswMsg.innerHTML="Password not matching";
         }
}

function regSubmit()
{
   if( nameVal() && eValidation() && mobileV() && confirm())
   {
       return true;
   }
   else
   {
        alert("Please complete the form");
       return false
       
   }
}