const pwd = document.querySelector('#password');
const conf_pwd = document.querySelector('#confirm_password');

const btn = document.querySelector('.btn');
const pwdOutput = document.querySelector('.pwd-output');
const confPwdOutput = document.querySelector('.conf-pwd-output');

const inputs = document.querySelectorAll('input');

const pattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$");

btn.addEventListener('click', () => {
    inputs.forEach(input => {
        if (input.value === '') {
            input.style.border = '0.12rem solid red';
        } else {
            input.style.border = '0.12rem solid blue';
        }
    });

    if(!pattern.test(pwd.value)){
        pwdOutput.innerText = `* Password should be 8 characters or more. It  should contain at least one lowercase, one uppercase, one digit and one special character.`;
        btn.type = `button`;
        pwd.style = 'border: 0.12rem solid red;';
    }
    else{
        btn.type = 'submit';
        pwdOutput.innerText = '';
        pwd.style = 'border: 0.12rem solid blue;';
    }

    if (pwd.value !== conf_pwd.value) {
        confPwdOutput.innerText = '* Password does not match';
        btn.type = 'button';
        pwd.style.border = '0.12rem solid red';
        conf_pwd.style.border = '0.12rem solid red';
    } 
    else {
        confPwdOutput.innerText = '';
        btn.type = 'submit';
        pwd.style.border = '0.12rem solid blue';
        conf_pwd.style.border = '0.12rem solid blue';
    }
});


