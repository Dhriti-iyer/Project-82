var mouseEvent="empty";
var last_position_of_x,last_position_of_y;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    color=document.getElementById("color_id").value;
    width=document.getElementById("width_id").value;
    radius=document.getElementById("radius_id").value;
    mouseEvent="mouseDown";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
    mouseEvent="mouseUP";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
    current_position_of_x=e.clientX-canvas.offsetLeft;
    current_position_of_y=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mouseDown")
    {
        console.log("Last positoin of x and y coordinates are");
        console.log("x =" + last_position_of_x + "y =" + last_position_of_y);
        ctx.moveTo(last_position_of_x,last_position_of_y);
        console.log("current positoin of x and y coordinates are");
        console.log("x =" + current_position_of_x + "y =" + current_position_of_y);
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.arc( current_position_of_x , current_position_of_y , radius , 0 , 2*Math.PI)
        ctx.stroke();
    }
    last_position_of_x=current_position_of_x;
    last_position_of_y=current_position_of_y;
}
function clear_area() 
{ 
    ctx.clearRect(0, 0, canvas.width, canvas.height);
} 
