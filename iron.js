class iron{
	constructor(x, y) {
		var options = {
		  'density':0.3,
		  'friction': 5,
		  'restitution':1
		};
	
	
	
	{
	// assign options to the iron 
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var ironpos=this.body.position;		
			push()
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			
			pop()
	}

}
}
