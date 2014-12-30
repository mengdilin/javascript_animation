var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

var disc = function(x,y,dx,ctx,direction){
    this.x=x;
    this.y=y;
    this.dx=dx;
    this.ctx=ctx;
    this.direction=direction;
}

var dot = function(x,y,ctx){
    this.x=x;
    this.y=y;
    this.ctx=ctx;
}

dot.prototype.draw = function(){
    this.ctx.beginPath();
    this.ctx.arc(this.x,this.y,15,0,2*Math.PI,false);
    this.ctx.fillStyle = "rgb(0, 0, 255)";
    this.ctx.fill();
}

dot.prototype.erase = function(){
    this.ctx.beginPath();
    this.ctx.arc(this.x,this.y,17,0,2*Math.PI,false);
    this.ctx.fillStyle = "rgb(255, 255, 255)";
    this.ctx.fill();
}
disc.prototype.draw = function(){
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, 50, 0.25 * Math.PI, 1.25 * Math.PI, this.direction);
    this.ctx.fillStyle = "rgb(255, 255, 0)";
    this.ctx.fill();
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, 50, 0.75 * Math.PI, 1.75 * Math.PI, this.direction);
    this.ctx.fill();
}

disc.prototype.erase = function(){
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, 52, 0.25 * Math.PI, 1.25 * Math.PI, this.direction);
    this.ctx.fillStyle = "rgb(255, 255, 255)";
    this.ctx.fill();
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, 52, 0.75 * Math.PI, 1.75 * Math.PI, this.direction);
    this.ctx.fill();
}

disc.prototype.animate = function(){
    this.erase();
    if(this.x<=50 || this.x>=900)
    {
	this.dx = this.dx*-1;
	this.direction=!this.direction;
    }
    this.x=this.x+this.dx;
    this.draw();
}



dot.prototype.animate = function(stuff){
    if(stuff.x==900||stuff.x==50)
    {
	this.draw();
    }
}

function setup(){
    d1 = new disc(50,50,-10,ctx,true);
    d1.draw();
    dot1 = new dot(200,50,ctx);
    dot1.draw();
    dot2 = new dot(300,50,ctx);
    dot2.draw();
    dot3 = new dot(400,50,ctx);
    dot3.draw();
    dot4 = new dot(500,50,ctx);
    dot4.draw();
    dot5 = new dot(600,50,ctx);
    dot5.draw();
    dot6 = new dot(700,50,ctx);
    dot6.draw();
    dot7 = new dot(800,50,ctx);
    dot7.draw();

}

function animate(){
    d1.animate();
    dot1.animate(d1);
    dot2.animate(d1);
    dot3.animate(d1);
    dot4.animate(d1);
    dot5.animate(d1);
    dot6.animate(d1);
    dot7.animate(d1);
}



setup();
setInterval(animate,50);

