class Ball{

    constructor(x,y,r,){
        var options = {
            restitution:1

        }
        this.body = Bodies.circle(x,y,r);
        this.x = x
        this.y = y
        this.r = r
        World.add(world,this.body);
        


    }
    show(){
        var pos = this.body.position
        push();
        ellipseMode(RADIUS);
        fill("red")
        ellipse(pos.x,pos.y,this.r,this.r)
        pop();

    }

}