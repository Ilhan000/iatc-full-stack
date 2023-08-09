const canvas = document.getElementById('canvas');
const c = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
//create arc 
// c.beginPath();
// c.arc(200,300,Math.PI * 10, 100,500);
// c.strokeStyle = "black"
// c.stroke();



function Circle(x,y,dx,dy,radius){   
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius
    this.draw = function(){
        c.beginPath();
        c.arc(this.x , this.y, Math.PI * 2, 70,70);
        c.strokeStyle = "black"
        c.stroke();

    }
    this.update = function(){
        if(this.x + this.radius > innerWidth || this.x - this.radius < 0 ){
           this.dx = -this.dx;

        }
        if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;      
        this.draw();  
    }
}
    var circleArray = [];
    for(i = 0;i < 100; i++){
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    var dx = (Math.random() - 0.5);
    var dy = (Math.random() - 0.5);
    var radius = 30;
        circleArray.push(new Circle(x,y,dx,dy, radius));
        var circle = new Circle(200,200,3,3,30);
    }
 
    function animate() {
        requestAnimationFrame(animate);
        for(i = 0; i < circleArray.length; i++ ){
            circleArray[i].update();
        }
        c.clearRect(0, 0, innerWidth, innerHeight);
        circle.update();

        c.beginPath();
        c.arc(x , y, radius, 0, Math.PI * 2,70,70);
        c.strokeStyle = "black"
        c.stroke();
       
    }

 animate();
