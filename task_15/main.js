const dayinput = document.getElementById('day');
const monthinput = document.getElementById('month');
const yearinput = document.getElementById('year');

const dayoutput = document.getElementById('DD');
const monthoutput = document.getElementById('MM');
const yearoutput = document.getElementById('YY');

const section = document.querySelector('section');
section.addEventListener('submit',handleSubmit);

const date = new Date();
let day = date.getDay();
let month = 1 + date.getMonth();
let year = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function validate() {
    const inputs = document.querySelectorAll('inputs');
    let validator = true;
    inputs.forEach((i) => {
        const parent = i.parentElement;
        if(!i.value) {
            i.style.borderColor = 'red';
            parent.querySelector('small').innerText = 'must be a valid date.';
            validator = false;
        } else if(monthinput.value > 12) {
            monthinput.style.borderColor = 'red';
            monthinput.parentElement.querySelector('small').innerText =
            'must be a valid date.';
            validator = false;
        } else if (dayinput.value > 31) {
            dayinput.style.borderColor = 'red';
            dayinput.parentElement.querySelector('small').innerText =
            'must be a valid date.'
            validator = false;
        } else{
            i.style.borderColor = 'black';
            parent.querySelector('small').innerText = '';
            validator = true;
        }

    })

    return validator;

}
    
    function handleSubmit (e) {
        e.preventDefault();
        if (validate()) {
            if(dayinput.value > day){
                day = day + months[month - 1];
                month = month - 1;

            }
            if (monthinput.value > 12){
                month = month + 12;
                year = year - 1;

            }
            const d = day - dayinput.value;
            const m = month - monthinput.value;
            const y = year - yearinput.value;

            dayoutput.innerHTML = d;
            monthoutput.innerHTML = m;
            yearoutput.innerHTML = y;
            

        }

    }
