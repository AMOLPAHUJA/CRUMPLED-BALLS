class paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
            restitution:0.3,
            density:1.2,
            friction:0
			}
		this.x=x;
		this.y=y;
		this.w=r
		this.h=r
		this.body=Bodies.circle(x, y, r , options);
 		World.add(world, this.body);
            this.image=loadImage('paper.png')
	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			image(this.image,0,0,this.w, this.h);
			pop()
			
	}

}