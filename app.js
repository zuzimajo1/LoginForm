var FirstName = document.getElementById('firstnameinput')
var Email = document.getElementById('emailaddressinput')
var Pass = document.getElementById('passwordinput');
var FirstNameChild = document.querySelector('.firstnamechild');
var LastName = document.getElementById('lastnameinput');
var LastNameChild = document.querySelector('.lastnamechild');
var EmailAddressChild = document.querySelector('.emailchild')



//First Name input
var update = false;
var content = "";
var count;
var inputsfirstname = false;
var inputsfirstname2 = false;
var inputsfirstname3 = false;
var successfirstname = false;
var beta = false;
var alpha = false;
var alpha2 = false;
var decider = 0;
var decider2 = 0;
var contentsfunction = function(e){
    content = e.target.value;
    var sample = content.toString();
    console.log(sample);
    count = 0;
    for(var i = 0; i<sample.length; i++){
            count++;
    }
    console.log(count)
    
        if(content.includes("!")|| content.includes('@')||content.includes('#')||content.includes('$') ||content.includes("%")|| content.includes("^")||
        content.includes("&")||content.includes("*")||content.includes("(")||content.includes(")")||content.includes('~')||content.includes("_")||
        content.includes("-")||content.includes("+")||content.includes("=")||content.includes("[")||content.includes("{")||content.includes("]")||
        content.includes("}")||content.includes("|")||content.includes("`")){
             if(beta === false){
                input3textfirstname();
             }

        }else{
            if(beta === true){
            remove3text();
        }
        }
 
}
FirstName.addEventListener('input',contentsfunction);

FirstName.addEventListener('focusout', function(){
    if(content === ""){
        inputtextfirstname();
    }else if(count <= 2 && inputsfirstname3 === false){
         input2textfirstname();
    }else if(content.includes("!")|| content.includes('@')||content.includes('#')||content.includes('$') ||content.includes("%")|| content.includes("^")||
        content.includes("&")||content.includes("*")||content.includes("(")||content.includes(")")||content.includes('~')||content.includes("_")||
        content.includes("-")||content.includes("+")||content.includes("=")||content.includes("[")||content.includes("{")||content.includes("]")||
        content.includes("}")||content.includes("|")||content.includes("`")){
            FirstName.style.border ='2px solid red';
            if(decider2 === 1){
                input3textfirstname();
            }else{

            }
    }else{
        inputsuccessfirstname();

}
})

FirstName.addEventListener('focusin', function(){
    FirstName.style.border = '1px solid green';
    if(inputsfirstname === true){
        removetext();
    }else if(inputsfirstname2 === true){
        remove2text();
    }else if(inputsfirstname3 === true){
        remove3text();
    }else if(successfirstname === true){
            removesuccess();
    }
})


function inputtextfirstname(){
    var text = document.createElement('p');
    text.innerHTML = '<p style="position:absolute;display:flex;align-items:center;font-size:12px;right:0;display:flex;bottom:0;color:red"><i class="fas fa-exclamation-triangle" style="display:flex;align-item:center;color:red;margin-right:8px;width:10px; height:10px"></i> Please do not omit any details.<p>';
    text.id = 'textid';
    FirstNameChild.appendChild(text);
    FirstName.style.border = '2px solid red';
    inputsfirstname = true;
    inputsfirstname2 = false;
    inputsfirstname3 = false;
}

function input2textfirstname(){
    var text2 = document.createElement('p');
    text2.innerHTML = '<p style="position:absolute;display:flex;align-items:center;font-size:12px;right:0;display:flex;bottom:0;color:red"><i class="fas fa-exclamation-triangle" style="display:flex;align-item:center;color:red;margin-right:8px;width:10px; height:10px"></i> Please input more than 2 letters.<p>';
    text2.id = 'textid2';
    FirstNameChild.appendChild(text2);
    FirstName.style.border = '2px solid red';
    inputsfirstname2 = true;
    inputsfirstname = false;
    inputsfirstname3 = false;
}

function input3textfirstname(){
    var text3 = document.createElement('p');
    text3.innerHTML = '<p style="position:absolute;display:flex;align-items:center;font-size:12px;right:0;display:flex;bottom:0;color:red"><i class="fas fa-exclamation-triangle" style="display:flex;align-item:center;color:red;margin-right:8px;width:10px; height:10px"></i> Special characters is prohibited.<p>';
    text3.id = 'textid3';
    FirstNameChild.appendChild(text3);
    FirstName.style.border = '2px solid red';
    inputsfirstname3 = true;
    inputsfirstname2 = false;
    inputsfirstname = false;
    beta = true;
    decider = 1;
    decider2 = 0;
}



function inputsuccessfirstname(){
    var text4 = document.createElement('p');
    text4.innerHTML = '<p style="position:absolute;display:flex;align-items:center;font-size:12px;right:0;display:flex;bottom:0;color:green"><i class="fas fa-check-circle" style="display:flex;align-item:center;color:green;margin-right:8px;width:10px; height:10px"></i> Inputted Successfully.<p>';
    text4.id = 'textid4';
    FirstNameChild.appendChild(text4);
    FirstName.style.border = '1px solid grey';
    beta = false;
    alpha = true;
    successfirstname = true;
    update = true;
    
}

function removesuccess(){
    document.getElementById('textid4').remove();
    FirstName.style.border = '1px solid grey';
    FirstName.style.border = '1px solid green';
   
}


function removesuccess2(){
    document.getElementById('textid4').remove();
    FirstName.style.border = '1px solid grey';
}





function removetext(){
    if(inputsfirstname === true){
    document.getElementById('textid').remove();
    FirstName.style.border = '1px solid green';
    inputsfirstname = false;
    }
}

function remove2text(){
    if(inputsfirstname2 === true){
    document.getElementById('textid2').remove();
    FirstName.style.border = '1px solid green';
    inputsfirstname2 = false;
    }
}

function remove3text(){
    if(inputsfirstname3 === true){
    document.getElementById('textid3').remove();
    FirstName.style.border = '1px solid green';
    inputsfirstname3 = false;
    beta = false;
    alpha = true;
    decider2 = 1;
    alpha2 = true;
    }
}

//Last Name input
var update2 = false;
var contentlastname = "";
var countlastname;
var inputslastname = false;
var inputslastname2 = false;
var inputslastname3 = false;
var successlastname = false;
var betalastname = false;
var alphalastname = false;
var alpha2lastname = false;
var deciderlastname = 0;
var decider2lastname = 0;
var contentsfunctionlastname = function(e){
    contentlastname = e.target.value;
    var samplelastname = contentlastname.toString();
    console.log(samplelastname);
    countlastname = 0;
    for(var s = 0; s<samplelastname.length; s++){
            countlastname++;
    }
    console.log(countlastname);
        if(update === true){
        if(contentlastname.includes("!")|| contentlastname.includes('@')||contentlastname.includes('#')||contentlastname.includes('$') ||contentlastname.includes("%")|| contentlastname.includes("^")||
        contentlastname.includes("&")||contentlastname.includes("*")||contentlastname.includes("(")||contentlastname.includes(")")||contentlastname.includes('~')||contentlastname.includes("_")||
        contentlastname.includes("-")||contentlastname.includes("+")||contentlastname.includes("=")||contentlastname.includes("[")||contentlastname.includes("{")||contentlastname.includes("]")||
        contentlastname.includes("}")||contentlastname.includes("|")||contentlastname.includes("`")){
             if(betalastname === false){
                input3textlastname();
             }

        }else{
            if(betalastname === true){
            remove3lastname();
        }
        }
    }
    }
LastName.addEventListener('input',contentsfunctionlastname);

LastName.addEventListener('focusout', function(){
    if(update === true){
    if(contentlastname === ""){
        inputtextlastname();
    }else if(countlastname <= 2 && inputslastname3 === false){
         input2textlastname();
    }else if(contentlastname.includes("!")|| contentlastname.includes('@')||contentlastname.includes('#')||contentlastname.includes('$') ||contentlastname.includes("%")|| contentlastname.includes("^")||
        contentlastname.includes("&")||contentlastname.includes("*")||contentlastname.includes("(")||contentlastname.includes(")")||contentlastname.includes('~')||contentlastname.includes("_")||
        contentlastname.includes("-")||contentlastname.includes("+")||contentlastname.includes("=")||contentlastname.includes("[")||contentlastname.includes("{")||contentlastname.includes("]")||
        contentlastname.includes("}")||contentlastname.includes("|")||contentlastname.includes("`")){
            LastName.style.border ='2px solid red';
            if(decider2lastname === 1){
                input3textlastname();
            }else{

            }
    }else{
        inputsuccesslastname();

}
}
})

LastName.addEventListener('focusin', function(){
    if(update === true){
    LastName.style.border = '1px solid green';
    if(inputslastname === true){
        removelastname();
    }else if(inputslastname2 === true){
        remove2lastname();
    }else if(inputslastname3 === true){
        remove3lastname();
    }else if(successlastname === true){
            removesuccesslastname();
    }
}
})


function inputtextlastname(){
    var textlastname = document.createElement('p');
    textlastname.innerHTML = '<p style="position:absolute;display:flex;align-items:center;font-size:12px;right:0;display:flex;bottom:0;color:red"><i class="fas fa-exclamation-triangle" style="display:flex;align-item:center;color:red;margin-right:8px;width:10px; height:10px"></i> Please do not omit any details.<p>';
    textlastname.id = 'textlastname';
    LastNameChild.appendChild(textlastname);
    LastName.style.border = '2px solid red';
    inputslastname = true;
    inputslastname2 = false;
    inputslastname3 = false;
}

function input2textlastname(){
    var text2lastname = document.createElement('p');
    text2lastname.innerHTML = '<p style="position:absolute;display:flex;align-items:center;font-size:12px;right:0;display:flex;bottom:0;color:red"><i class="fas fa-exclamation-triangle" style="display:flex;align-item:center;color:red;margin-right:8px;width:10px; height:10px"></i> Please input more than 2 letters.<p>';
    text2lastname.id = 'textlastname2';
    LastNameChild.appendChild(text2lastname);
    LastName.style.border = '2px solid red';
    inputslastname2 = true;
    inputslastname = false;
    inputslastname3 = false;
}

function input3textlastname(){
    var text3lastname = document.createElement('p');
    text3lastname.innerHTML = '<p style="position:absolute;display:flex;align-items:center;font-size:12px;right:0;display:flex;bottom:0;color:red"><i class="fas fa-exclamation-triangle" style="display:flex;align-item:center;color:red;margin-right:8px;width:10px; height:10px"></i> Special characters is prohibited.<p>';
    text3lastname.id = 'textlastname3';
    LastNameChild.appendChild(text3lastname);
    LastName.style.border = '2px solid red';
    inputslastname3 = true;
    inputslastname2 = false;
    inputslastname = false;
    betalastname = true;
    deciderlastname = 1;
    decider2lastname = 0;
}

function inputsuccesslastname(){
    var text4lastname = document.createElement('p');
    text4lastname.innerHTML = '<p style="position:absolute;display:flex;align-items:center;font-size:12px;right:0;display:flex;bottom:0;color:green"><i class="fas fa-check-circle" style="display:flex;align-item:center;color:green;margin-right:8px;width:10px; height:10px"></i> Inputted Successfully.<p>';
    text4lastname.id = 'textlastname4';
    LastNameChild.appendChild(text4lastname);
    LastName.style.border = '1px solid grey';
    betalastname = false;
    alphalastname = true;
    successlastname = true;
    update2 = true;
    
}

function removesuccesslastname(){
    document.getElementById('textlastname4').remove();
    LastName.style.border = '1px solid green';
}


function removesuccesslastname2(){
    document.getElementById('textlastname4').remove();
    LastName.style.border = '1px solid grey';
}

function removelastname(){
    if(inputslastname === true){
    document.getElementById('textlastname').remove();
    LastName.style.border = '1px solid green';
    inputslastname = false;
    }
}

function remove2lastname(){
    if(inputslastname2 === true){
    document.getElementById('textlastname2').remove();
    LastName.style.border = '1px solid green';
    inputslastname2 = false;
    }
}

function remove3lastname(){
    if(inputslastname3 === true){
    document.getElementById('textlastname3').remove();
    LastName.style.border = '1px solid green';
    inputslastname3 = false;
    betalastname = false;
    alphalastname = true;
    decider2lastname = 1;
    alpha2lastname = true;
    }
}


//Email Address input


var update3 = false;
var contentemailaddress = "";
var countemailaddress;
var inputsemailaddress = false;
var inputsemailaddress3 = false;
var successemailaddress = false;


var contentsfunctionemailaddress = function(e){
    contentemailaddress = e.target.value;
    var sampleemailaddress = contentemailaddress.toString();
    console.log(sampleemailaddress);
    countemailaddress = 0;
    for(var s = 0; s<sampleemailaddress.length; s++){
            countemailaddress++;
    }
    console.log(countemailaddress);
     
    }
Email.addEventListener('input',contentsfunctionemailaddress);

Email.addEventListener('focusout', function(){
    if(update2 === true){
    if(contentemailaddress === ""){
        inputtextemailaddress();
    }else if(!contentemailaddress.includes('@')){
            input3textemailaddress();
    }else{
        inputsuccessemailaddress();
    }
}
 
})

Email.addEventListener('focusin', function(){
    if(update2 === true){
    Email.style.border = '1px solid green';
    if(inputsemailaddress === true){
        removeemailaddress();
    }else if(inputsemailaddress3 === true){
        remove3emailaddress();
    }else if(successemailaddress === true){
            removesuccessemailaddress();
    }
}

})


function inputtextemailaddress(){
    var textemailaddress = document.createElement('p');
    textemailaddress.innerHTML = '<p style="position:absolute;display:flex;align-items:center;font-size:12px;right:0;display:flex;bottom:0;color:red"><i class="fas fa-exclamation-triangle" style="display:flex;align-item:center;color:red;margin-right:8px;width:10px; height:10px"></i> Please do not omit any details.<p>';
    textemailaddress.id = 'textemailaddress';
    EmailAddressChild.appendChild(textemailaddress);
    Email.style.border = '2px solid red';
    inputsemailaddress = true;
    inputsemailaddress3 = false;
}


function input3textemailaddress(){
    var text3emailaddress = document.createElement('p');
    text3emailaddress.innerHTML = '<p style="position:absolute;display:flex;align-items:center;font-size:12px;right:0;display:flex;bottom:0;color:red"><i class="fas fa-exclamation-triangle" style="display:flex;align-item:center;color:red;margin-right:8px;width:10px; height:10px"></i> This is not an email address.<p>';
    text3emailaddress.id = 'textemailaddress3';
    EmailAddressChild.appendChild(text3emailaddress);
    Email.style.border = '2px solid red';
    inputsemailaddress3 = true;
    inputsemailaddress = false;

    
}


function inputsuccessemailaddress(){
    var text4emailaddress = document.createElement('p');
    text4emailaddress.innerHTML = '<p style="position:absolute;display:flex;align-items:center;font-size:12px;right:0;display:flex;bottom:0;color:green"><i class="fas fa-check-circle" style="display:flex;align-item:center;color:green;margin-right:8px;width:10px; height:10px"></i> Inputted Successfully.<p>';
    text4emailaddress.id = 'textemailaddress4';
    EmailAddressChild.appendChild(text4emailaddress);
    Email.style.border = '1px solid grey';
    successemailaddress = true;
    update3 = true;
    
}

function removesuccessemailaddress(){
    document.getElementById('textemailaddress4').remove();
    Email.style.border = '1px solid green';
}

function removesuccessemailaddress2(){
    document.getElementById('textemailaddress4').remove();
    Email.style.border = '1px solid grey';
}


function removeemailaddress(){
    if(inputsemailaddress === true){
    document.getElementById('textemailaddress').remove();
    Email.style.border = '1px solid green';
    inputsemailaddress = false;
    }
}


function remove3emailaddress(){
    if(inputsemailaddress3 === true){
    document.getElementById('textemailaddress3').remove();
    Email.style.border = '1px solid green';
    inputsemailaddress3 = false;
    }
}


//Password Input


var Pass = document.getElementById('passwordinput');
var PassChild = document.querySelector('.passchild')
var ToggleSlashEye = document.getElementById('toggle-slash-eye');
var ToggleEye = document.getElementById('toggle-eye');

ToggleSlashEye.addEventListener('click', function(){
   var attributes = Pass.getAttribute('type');
   if(attributes === 'password'){
        attributes = 'text';
        ToggleSlashEye.style.display = 'none';
        ToggleEye.style.display = 'inline';

   Pass.setAttribute('type',attributes);
   }
})

ToggleEye.addEventListener('click',function(){
    var attributes2 = Pass.getAttribute('type');
    if(attributes2 === 'text'){
        attributes2 = 'password';
        ToggleSlashEye.style.display = 'inline';
        ToggleEye.style.display = 'none';

        Pass.setAttribute('type',attributes2);
    }
})

var update4 = false;
var contentpassword = "";
var countpassword;
var inputspassword = false;
var inputspassword3 = false;
var successpassword = false;


var contentsfunctionpassword = function(e){
    contentpassword = e.target.value;
    var samplepassword = contentpassword.toString();
    console.log(samplepassword);
    countpassword = 0;
    for(var s = 0; s<samplepassword.length; s++){
            countpassword++;
    }
    console.log(countpassword);
     
    }
Pass.addEventListener('input',contentsfunctionpassword);

Pass.addEventListener('focusout', function(){
    if(update3 === true){
    if(contentpassword === ""){
        inputpassword();
    }else{
        inputsuccesspassword();
    }
}
 
})

Pass.addEventListener('focusin', function(){
    if(update3 === true){
    Pass.style.border = '1px solid green';
    if(inputspassword === true){
        removepassword();
    }else if(successpassword === true){
            removesuccesspassword();
    }
}

})


function inputpassword(){
    var textpassword = document.createElement('p');
    textpassword.innerHTML = '<p style="position:absolute;display:flex;align-items:center;font-size:12px;right:0;display:flex;bottom:0;color:red"><i class="fas fa-exclamation-triangle" style="display:flex;align-item:center;color:red;margin-right:8px;width:10px; height:10px"></i> Please do not omit any details.<p>';
    textpassword.id = 'textpassword';
    PassChild.appendChild(textpassword);
    Pass.style.border = '2px solid red';
    inputspassword = true;
    inputspassword3 = false;
}


function inputsuccesspassword(){
    var text4password = document.createElement('p');
    text4password.innerHTML = '<p style="position:absolute;display:flex;align-items:center;font-size:12px;right:0;display:flex;bottom:0;color:green"><i class="fas fa-check-circle" style="display:flex;align-item:center;color:green;margin-right:8px;width:10px; height:10px"></i> Inputted Successfully.<p>';
    text4password.id = 'textpassword4';
    PassChild.appendChild(text4password);
    Pass.style.border = '1px solid grey';
    successpassword = true;
    update4 = true;
    
}

function removesuccesspassword(){
    document.getElementById('textpassword4').remove();
    Pass.style.border = '1px solid green';
}

function removesuccesspassword2(){
    document.getElementById('textpassword4').remove();
    Pass.style.border = '1px solid grey';
}


function removepassword(){
    if(inputspassword === true){
    document.getElementById('textpassword').remove();
    Pass.style.border = '1px solid green';
    inputspassword = false;
    }
}

//Login Successfully

var SuccessLogin = document.querySelector('.successdiv');
var Button = document.getElementById('buttonclick')
var SuccessButton = document.querySelector('.successbutton');
var overall = false;


function RemoveAll(){
    update = false;
    content = '';
    inputsfirstname = false;
    inputsfirstname2 = false;
    inputsfirstname3 = false;
    successfirstname = false;
    beta = false;
    alpha = false;
    alpha2 = false;
    decider = 0;
    decider2 = 0;
    update2 = false;
    contentlastname = "";
    countlastname;
    inputslastname = false;
    inputslastname2 = false;
    inputslastname3 = false;
    successlastname = false;
    betalastname = false;
    alphalastname = false;
    alpha2lastname = false;
    deciderlastname = 0;
    decider2lastname = 0;
    update3 = false;
    contentemailaddress = "";
    countemailaddress;
    inputsemailaddress = false;
    inputsemailaddress3 = false;
    successemailaddress = false;
    update4 = false;
    contentpassword = "";
    inputspassword = false;
    inputspassword3 = false;
    successpassword = false;
    removesuccess2();
    removesuccesslastname2();
    removesuccessemailaddress2();
    removesuccesspassword2();

}

Button.addEventListener('click',function(){
    if(update4 === true){
        SuccessLogin.style.display = 'flex';
    }
})

SuccessButton.addEventListener('click',function(){
    SuccessLogin.style.display ='none';
    RemoveAll();
})