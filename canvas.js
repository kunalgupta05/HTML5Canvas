window.onload = function () {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');


    // Making the stroke around the circle with animation and delay
    // For smoth animation http://jsfiddle.net/loktar/uhVj6/4/
    var count=0;
    ctx.beginPath();
    ctx.strokeStyle="blue";     
    ctx.arc(canvas.width/2,canvas.height/2,80,0,2*Math.PI,false);
    ctx.textAlign="center";    
    ctx.stroke();    
    ctx.closePath();

    var ch=canvas.height;
    var cw=canvas.width;
    var radius=100;
    var currPercent=0;
    var endPercent=100;
    var circle=2*Math.PI;
    var quart=Math.PI/2;
    var diff;
    var start;
    ctx.lineWidth=10;
    ctx.strokeStyle="blue";
    
    function loadCircle(){
        diff=(currPercent/600)*circle;           
        ctx.clearRect(0,0,ch,cw);
        ctx.beginPath();        
        ctx.arc(cw/2,ch/2,radius,-quart,diff-quart,false);
        ctx.fillText(count.toString(),canvas.width/2,canvas.height/2,canvas.width);        
        ctx.stroke();              
        if(currPercent>=600){
            console.log("sdfds");
            clearTimeout(delayedAnimation);
        }        
        currPercent++;
        count++;        
    }

    var delayedAnimation=setInterval(function(){
        loadCircle();        
    },1000);

    

    //Making a circle inside of a circle

    //first circle
    // ctx.beginPath();
    // ctx.strokeStyle="blue";     
    // ctx.arc(300,300,125,0,2*Math.PI,false);     
    // ctx.stroke();    
    // ctx.closePath();
    // //second circle inside the first one
    // ctx.beginPath();
    // ctx.lineWidth=10;
    // ctx.strokeStyle="green";
    // ctx.arc(300,300,100,0,2*Math.PI,false);        
    // ctx.stroke();
    // ctx.fill();
    // ctx.closePath();
    
    // var scores=[100,90,80,70,60];
    // var width=50;
    // var currX=50;
    // var base=200;
    // var startX=0;
    // var startY=0;
    
    // ctx.fillStyle='#000';
    
    // for(var i=0;i<scores.length;i++){
    //     ctx.fillStyle='#'+j+j+j;
    //     var h=scores[i];
    //     ctx.fillRect(currX,canvas.height-h,width,h);        
    //     var j=i+1;
        
    //     //moveTo point
    //     if(startX==0) startX=currX;
    //     if(startY==0) startY=canvas.height-h-10;

    //     ctx.beginPath();
    //     ctx.strokeStyle='yellow';
    //     ctx.lineWidth=5;
    //     ctx.moveTo(startX,startY);
    //     ctx.lineTo(currX,canvas.height-h-15);
    //     ctx.stroke();
    //     ctx.closePath();

    //     startX=currX+10;
    //     startY=canvas.height-h-15;

    //     ctx.beginPath();
    //     ctx.fillStyle="blue";
    //     ctx.arc(currX+width/2,canvas.height-h-10,10,0,2*Math.PI,false);
    //     ctx.fill();
    //     ctx.closePath();

    //     currX+=width+10;
    // }

    // ctx.strokeStyle="red";
    // ctx.lineWidth=5;
    // ctx.beginPath();

    // ctx.moveTo(150,150);
    // ctx.lineTo(90,400);
    // ctx.lineTo(200,400);
    // ctx.lineTo(150,150);
    // ctx.closePath();
    // ctx.stroke();

    // ctx.fillStyle="yellow";
    // ctx.fill();


  }