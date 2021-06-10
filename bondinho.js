//

var down =0; //sky colors
var lighting=1;


draw= function(){

//sky
noStroke();
background(7, 24, 87);
fill(71, 21, 112);
rect(0,down*0.4,400,400,0);
fill(143, 29, 132);
rect(0,down*0.6+90,400,400,0);
fill(161, 102, 15);
rect(0,down*1.3+180,400,400,0);

//Bondinho
stroke(18, 7, 18); 
line(115,195,320,260);

//Pão de Açucar
noStroke();

fill(51+lighting*0.2, 12+lighting*0.1, 12+lighting*0.1);
bezier(0,400,150,0,90,280,400,400);
bezier(0,400,290,400,310,80,400,400);

fill(51, 12, 12);
bezier(0,400+10,150,0+10,90,280+10,400,400+10);
bezier(0,400+10,290,400-10,310,80+10,400,400+10);

//animation
lighting++;
down++;

};
