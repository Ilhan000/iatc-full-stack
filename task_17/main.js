
fetch('https://dummyjson.com/users')
.then(res => {
   return res.json();
})
.then(data => {
    data.array.forEach(element => {
        (user => {
            const markup  = '${user.name}';
            document.querySelector('ul').insertAdjacentElement('beforeend', markup);
    });
        
    });
})
    
.then(console.log);

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}