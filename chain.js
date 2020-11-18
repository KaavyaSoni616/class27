class Chain{
    constructor(body1, body2){
        var options = {
            bodyA:body1,
            bodyB:body2,
            length:10,
            stiffness:0.1
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain)
    }
display() {
var pointa = this.chain.bodyA.position
var pointb = this.chain.bodyB.position
strokeWeight(3);
line(pointa.x,pointa.y,pointb.x,pointb.y)


}
}