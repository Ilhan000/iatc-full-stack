let count = 0;
const number = document.querySelector('#number');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')){
            count--;
        }
        number.textContent = count;

        if (styles.contains('reset')){
            count = 0;
        }
        number.textContent = count;

        if (styles.contains('increase')){
            count++;
        }
        number.textContent = count;
        
        
    });

});