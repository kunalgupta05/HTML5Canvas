window.onload = function () {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    ctx.strokeStyle="#28d1fa";
    ctx.lineWidth=17;
    ctx.lineCap='round';
    ctx.shadowBlur=15;
    ctx.shadowColor="#28d1fa";


    function degToRad(degree) {
        var factor = Math.PI / 180;
        return degree * factor;
    }

    function renderTime() {
        var now = new Date();
        var time = now.toLocaleTimeString();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();
        var milliSeconds = now.getMilliseconds();
        var newSeconds=seconds+(milliSeconds/1000);

        // Background
        ctx.fillStyle="#333333";
        ctx.fillRect(0,0,canvas.width,canvas.height);        

        // Hours
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, 200, degToRad(270), degToRad(hours * 30 - 90));
        ctx.stroke();

        // minutes
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, 170, degToRad(270), degToRad(minutes * 6 - 90));
        ctx.stroke();

        // seconds
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, 140, degToRad(270), degToRad(newSeconds * 6 - 90));
        ctx.stroke();

        // time
        ctx.font="25px Arial";
        ctx.fillStyle="white";
        //var textMetrics=ctx.measureText(time);
        ctx.fillText(time,canvas.width/2-60,canvas.height/2-5);

    }
     setInterval(renderTime,40);
}