/*
|-------------------------------------------------------------|
--------------------DECLARATION VARIABLE----------------------|
|-------------------------------------------------------------|
*/

var btnsubmit = document.getElementById('submitbtn');
var input = document.getElementsByTagName('input');
var txtfirstname = document.getElementById('txtfirstname');
var txtlastname = document.getElementById('txtlastname');
var txtemail = document.getElementById('txtemail');
var txtpassword = document.getElementById('txtpassword');
let error;


/*
|-------------------------------------------------------------|
|---------------------------FUNCTION--------------------------|
|-------------------------------------------------------------|
*/

// Vérifie si un champs est vide par son id
function isempty(id){
    let value = document.getElementById(id).value;
    if (value === '') {
        return true;
    } else {
        return false;
    }
}

// insert le messegae d'erreur en fonction des id passé en paramètre
function displayerror(idimg,idp){
    let elt = document.getElementById(idimg);
    elt.setAttribute('src', "images/icon-error.svg");
    elt.setAttribute('alt', "icon-error");
    texterror(idp);
}

// Affichage le message d'érreur en fonction du paragraphe
function texterror(id) {
    if (id==='errorName') {
        error='First name cannot be empty';
    }else if (id==='errorLastName') {
        error='Last name cannot be empty';
    } else if (id==='erroremail') {
        error='Look like this is not an email';
    } else if (id==='errorpassword') {
        error='Password cannot be empty';
    } 
    document.getElementById(id).innerText=error;    
}

//function to remove error
function nonedisplayerror(idimg,idp){
    let elt = document.getElementById(idimg);
    elt.removeAttribute('src', "images/icon-error.svg");
    elt.removeAttribute('alt', "icon-error");
    document.getElementById(idp).innerText='';  
}






/*
|-------------------------------------------------------------|
|-------------------LISTENER DOM ELEMENTS---------------------|
|-------------------------------------------------------------|
*/


/* EVENT ON BUTTON SUBMIT */
btnsubmit.addEventListener('click', ()=>{
    if( txtfirstname.value===''){
        displayerror("iconerrfirstname", "errorName");
        txtfirstname.classList.add('form-signup__input--error');
        txtfirstname.removeAttribute('placeholder');
    }
    
})
btnsubmit.addEventListener('click', ()=>{
    if( txtlastname.value===''){
        displayerror("iconerrlastname", "errorLastName");
        txtlastname.classList.add('form-signup__input--error');
        txtlastname.removeAttribute('placeholder');
    }
})
btnsubmit.addEventListener('click', ()=>{
    if( txtemail.value===''){
        displayerror("iconerremail", "erroremail");
        txtemail.classList.add('form-signup__input--error');
        txtemail.removeAttribute('placeholder');
        txtemail.style.webkitMaskSize


























































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































         
    }
})
btnsubmit.addEventListener('click', ()=>{
    if( txtpassword.value===''){
        displayerror("iconerrpassword", "errorpassword");
        txtpassword.classList.add('form-signup__input--error');
        txtpassword.removeAttribute('placeholder');
    }
})



/* EVENT ON INPUT */
txtlastname.addEventListener('input', (e)=>{
    let value = e.currentTarget.value;
    if (value!='') {
        nonedisplayerror("iconerrlastname", "errorLastName");
    }
})
txtfirstname.addEventListener('input', (e)=>{
    let value = e.currentTarget.value;
    if (value!='') {
        nonedisplayerror("iconerrfirstname", "errorName");
    }
})
txtemail.addEventListener('input', (e)=>{
    let value = e.currentTarget.value;
    if (value!='') {
        nonedisplayerror("iconerremail", "erroremail");
    }
})
txtpassword.addEventListener('input', (e)=>{
    let value = e.currentTarget.value;
    if (value!='') {
        nonedisplayerror("iconerrpassword", "errorpassword");
    }
})

















// for (let i = 0; i < input.length; i++) {
//     const element = input[i];
//     element.addEventListener('keyup', (e)=>{
//         const value = e.currentTarget.value;
//         if (value !== '') {
//             document.getElementById('iconerrfirstname').removeAttribute('src');
//             document.getElementById('iconerrfirstname').removeAttribute('alt');
            
//         }
//     })
// }
// if (inputTab[0].value==='') {
//     error='First name cannot be empty';
// }else if (inputTab[1].value==='') {
//     error='Last name cannot be empty';
// } else if (inputTab[2].value==='') {
//     error='Look like this is not an email';

// } else if (inputTab[3].value==='') {
//     error='Password cannot be empty';
// } 


// btnsubmit.addEventListener('click', ()=>{
//   if (inputTab[0].value === '') {
//     document.getElementById('iconerrfirstname').setAttribute('src', "images/icon-error.svg");
//     document.getElementById('iconerrfirstname').setAttribute('alt', "icon-error");
//     document.getElementById('errorName').innerText= error;
//   }
//   if (inputTab[1].value === '') {
//     document.getElementById('iconerrlastname').setAttribute('src', "images/icon-error.svg");
//     document.getElementById('iconerrlastname').setAttribute('alt', "icon-error");
//     document.getElementById('errorLastName').innerText= error;
//   }
//   if (inputTab[2].value === '') {
//     document.getElementById('iconerremail').setAttribute('src', "images/icon-error.svg");
//     document.getElementById('iconerremail').setAttribute('alt', "icon-error");
//     document.getElementById('erroremail').innerText= error;
//   }
//   if (inputTab[3].value === '') {
//     document.getElementById('iconerrpassword').setAttribute('src', "images/icon-error.svg");
//     document.getElementById('iconerrpassword').setAttribute('alt', "icon-error");
//     document.getElementById('errorpassword').innerText= error;
//   }
// })
