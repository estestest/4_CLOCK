var colorList1 =['#ce3939',
                      '#86721d',
                      '#5074ec',
                      '#551252',
                      '#125255',
                      '#942520',
                      '#927415',
                      '#c23a0a',
                      '#391d71',
                      '#e52703',
                      '#745c5c',
                      '#76ed79',
                      '#ce3939',
                      '#86721d',
                      '#5074ec',
                      '#551252',
                      '#125255',
                      '#942520',
                      '#927415',
                      '#c23a0a',
                      '#391d71',
                      '#e52703',
                      '#745c5c',
                      '#76ed79'
                    ];
var colorList2 =['#dd7676',
                      '#c5a72a',
                      '#849df1',
                      '#7f1b7b',
                      '#1b7b7f',
                      '#a9504c',
                      '#c39b1c',
                      '#f2480c',
                      '#4e279a',
                      '#ea5235',
                      '#8f7c7c',
                      '#99f19a',
                      '#dd7676',
                      '#c5a72a',
                      '#849df1',
                      '#7f1b7b',
                      '#1b7b7f',
                      '#a9504c',
                      '#c39b1c',
                      '#f2480c',
                      '#4e279a',
                      '#ea5235',
                      '#8f7c7c',
                      '#99f19a'
                    ];
var colorList3 =['#e79f9f',
                     '#d8bd4a',
                     '#B9C7F7',
                     '#be29b8',
                     '#25a3a9',
                     '#be7c79',
                     '#f4c224',
                     '#f56c3c',
                     '#6231c2',
                     '#ec674e',
                     '#ab9d9d',
                     '#bbf6bc',
                     '#e79f9f',
                     '#d8bd4a',
                     '#B9C7F7',
                     '#be29b8',
                     '#25a3a9',
                     '#be7c79',
                     '#f4c224',
                     '#f56c3c',
                     '#6231c2',
                     '#ec674e',
                     '#ab9d9d',
                     '#bbf6bc'
                      ];



function setup() {
  createCanvas(800,600)
  angleMode(DEGREES)
  

}

function draw() {
  background(255)
  translate(width/2,height/2);
     
     
    
 // hours
  push();
   if (hour()>12) {
    var a = hour()-13
  } else {
   a = hour()
  }
   rotate((a+1)*30);
	noStroke();
  for(var index=hour(); index<colorList1.length; index++){
 var colorHour= colorList1[index];
 fill(color(colorHour))}
 //	fill(163,62,49);
	ellipse(0,-150,90,90);
	pop();
	
	//minute
	push();
	
	for(var index2=hour(); index2<colorList2.length; index2++){
 var colormin= colorList2[index2];
 fill(color(colormin))}
 
	rotate((minute())*6);
	noStroke();
	
//	fill(215,129,105);
	ellipse(0,-150,70,70);
	pop();
	
	//second
	push();
	for(var index3=hour(); index3<colorList3.length; index3++){
 var colorsec= colorList3[index3];
 fill(color(colorsec))}
	rotate((second())*6);
	noStroke(); 
	//fill(243,197,177);
	ellipse(0,-150,40,40);
	pop();
 

  fill(255)
  stroke(100)
  strokeWeight(10)
  ellipse(0,0,295,295)
  
   
  
}