var N = 6;

var B1;
var B2;

function setup() {

  createCanvas( windowWidth , windowHeight );
  
  B1 = new Array(N);
  B2 = new Array(N);

  for ( n = 0 ; n < N ; n++ ){
    B1[n] = new Ball();
    B2[n] = new Ball();

}
   
  var r = random( 0 , 255);
  var g = random( 0 , 255);
  var b = random( 0 , 255);
 
  //background( 0 , 0 , 0 );
 
 // stroke( r , g , b );
 
 //noStroke; 
  strokeWeight( 0.5 );
}

function draw() {

  background( 0 , 0 , 0 );
  
  var r = random( windowWidth/3.6 , windowHeight*.12 );  
  var g = random( windowWidth/3.6 , windowHeight*.12 );  
  var b = random( windowWidth/3.6 , windowHeight*.12 );  
  
  
  for ( n = 0 ; n < N ; n++ ){
    B1[n].evolveDraw();
    B2[n].evolveDraw();
   
    line( B1[n].pos.x , B1[n].pos.y , B2[n].pos.x , B2[n].pos.y );
      stroke( r, g , b );
    
  }
}

var Ball = function(){
  this.pos = createVector( width/2 , height/2 );
  
  this.pos2 = createVector( width/2 , height/2 );
 
  this.v = p5.Vector.random2D();
   this.v.mult( random( 2 , 5 ) );
  
  this.evolveDraw =function() {
    this.pos.add( this.v );
  
    if ( this.pos.x >= width || this.pos.x <= 0 ){
      this.v.x *=-1;
    }
    if ( this.pos.y >= height || this.pos.y <= 0 ){
      this.v.y *=-1;
    }
    
  //var r = random( 0 , 255);
  //var g = random( 0 , 255);
  //var b = random( 0 , 255);
    
  var r = random( windowWidth/3.6 , windowHeight*.12 );  
  var g = random( windowWidth/3.6 , windowHeight*.12 );  
  var b = random( windowWidth/3.6 , windowHeight*.12 );  
  
    fill( r , g ,b );
    ellipse( this.pos.x , this.pos.y , 5 );
   
    
  };
  
};


function keyTyped() {
  if( key === 's' ) {
    saveCanvas( 'canvas' , 'jpg' );
    console.log("saved");
  };
 }
