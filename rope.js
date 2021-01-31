class Rope{
   constructor(bodyA,bodyB,offsetX,offsetY){
      this.offsetX=offsetX;
      this.offsetY=offsetY;
      
       var options={
           bodyA:bodyA,
           bodyB:bodyB,
           pointA:{x:this.offsetX,y:this.offsetY}

          // stiffness:0.07,
          // length:15

       }
       this.rope=Constraint.create(options);
       World.add(world,this.rope);

   }
display(){
    strokeWeight(3);
    stroke("white")
    line(pointA.x+this.offsetX,pointA.y+this.offsetY,pointB.x,pointB.y)
}
}

