var gst=[];
function submit(){
    var display=[];
   for(i=1;i<5;i++){
    var n1=document.getElementById("gst"+i).value;
    gst.push(n1);
   }
   for(k=0;k<4;k++){
       display.push("<h4>"+"name-"+gst[k]+"</h4");
   }
        document.getElementById("listc").innerHTML=display;
    var a=display.join("");
    document.getElementById("list").innerHTML=a;
    document.getElementById("btn1").style.display="none";
    document.getElementById("btn2").style.display="inline-block";
}
function sort(){
    var arr=[];
    gst.sort();
    for(k=0;k<4;k++){
        display.push("<h4>"+"name-"+gst[k]+"</h4");

    }
    var a=display.join("");
    document.getElementById("list").innerHTML=a;
 
}
