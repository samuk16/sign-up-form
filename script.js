
const pass = document.querySelector('#pass');
const passConfirm = document.querySelector('#confirm');




// const form = document.querySelector('#form');
// form.noValidate = true;



function passEqual(){

  if (pass.value != passConfirm.value) {

      passConfirm.classList.add('diffPass')

  }else if(pass.value.length == 0) {

      passConfirm.classList.remove('diffPass')
      passConfirm.classList.remove('equalPass')

  }else if(pass.value == passConfirm.value){

    passConfirm.classList.remove('diffPass');
    passConfirm.classList.add('equalPass')
  }

};




pass.addEventListener('input',passEqual);
passConfirm.addEventListener('input',passEqual);


