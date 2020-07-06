const form = document.getElementById('form');
const contact = document.getElementById('contactform');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPass = document.getElementById('confirmPass');
const fullName = document.getElementById('fullName');
const email1 = document.getElementById('email1');
const msg = document.getElementById('message');
const msglength = document.getElementById('msgLen');

if(form)
  populateUI([username, email, password, confirmPass]);
if(contact)
  populateUI([fullName, email1, msg]);

//show error
function showErr(input, message){
  const formControl = input.parentElement;
  formControl.className = 'formControl error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

//show success
function showSucc(input){
  const formControl = input.parentElement;
  formControl.className = 'formControl success';
}

//return the name 
function giveName(input){
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


// check the user length
function checkUserLen(inp){
  if(inp.value.length < 3 || inp.value.length > 12){
    showErr(inp, "Username must be between 3 and 12");
  }else{
    showSucc(inp);
  }
}

function checkEmail(email){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if(re.test(String(email.value).toLowerCase())){
    showSucc(email);
  }else{
    showErr(email, 'Email is not valid');
  }
}

function checkPasslen(input){
  if(input.value.length < 6 || input.value.length > 12)
    showErr(input, 'Password must be between 6 and 12');
  else
    showSucc(input);
}

function checkPassMatch(input1, input2){
  if(input1.value == input2.value && input1.value.length >= 6 && input1.value.length <= 12){
    showSucc(input2);
  }else{
    showErr(confirmPass, 'Password doesn t match');
  }
}

//get data from local storage and populate UI
function populateUI(arrinput){
  arrinput.forEach(function(item){
    const getItm = sessionStorage.getItem(item.id);
    // console.log(getItm);
    if(getItm){
      item.value = getItm;
    }
  });
}

//save register data to local storage
function saveData(inputarr){
  inputarr.forEach(function(data){
    sessionStorage.setItem(data.children[1].id, data.children[1].value);
  });
}

//check input
function checkRegInput(inputarr){
  checkUserLen(inputarr[0]);
  checkEmail(inputarr[1]);
  checkPasslen(inputarr[2]);
  checkPassMatch(inputarr[2], inputarr[3]);
}
//event Listener for register
if(form){
  form.addEventListener('submit', function(e){
    e.preventDefault();
    checkRegInput([username, email, password, confirmPass]);
    const rightData = document.querySelectorAll('.success');
    saveData([...rightData]);
    populateUI([username, email, password, confirmPass]);
  });
}

function checkName(input){
  if(input.value.length < 2 || input.value.length > 30){
    showErr(input, 'Name muste be between 2 and 30');
  }else{
    showSucc(input);
  }
}
function checkMsg(input){
  if(input.value.length < 10 || input.value.length > 120){
    showErr(input, 'message must be between 10 and 120 character')
  }else{
    showSucc(input);
  }
}
//check input for contact
function checkContInput(inputarr){
  checkName(inputarr[0]);
  checkEmail(inputarr[1]);
  checkMsg(inputarr[2]);
}
//event Listener for contact
if(contact){
  contact.addEventListener('submit', function(a){
  a.preventDefault();
  checkContInput([fullName, email1, msg]);
  const rightData = document.querySelectorAll('.success');
  saveData([...rightData]);
});

//msg length UI
contact.addEventListener('keyup', function(e){
  msglength.innerText = +msg.value.length;
});
}
