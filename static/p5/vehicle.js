function Vehicle(x, y, m) {
  this.pos = createVector(x, y);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.maxspeed = 6;
  this.maxforce = 0.2;

  this.r = 8;

  /**
   * No mass is taken into account
   * Pretty much because all seekers are the same
   */

  this.applyForce = function (force) {
    this.acc.add(force);
  }

  /**
   * Seeking thre mouse position
   * @param {Vector|Object} target - Mouse position X,Y
   */

  this.seek = function (target) {
    var desired = p5.Vector.sub(target, this.pos);

    /**
     * Normalizing the steering behaviour
     * by setting the magnitude
     */

    desired.setMag(this.maxspeed);

    /**
     * We basically make the seekers go the mouse
     * by substracting their desired position (mouse position)
     * with their actual velocity
     * 
     */

    var steering = p5.Vector.sub(desired, this.vel);
    steering.limit(this.maxforce);

    //Applying force
    this.applyForce(steering);

  }
  
  /**
   * When shocked, the seekers simply wander
   * @param {Vector|Object} target - Random target
   */

  this.wander = function (target) {
    
    var desired = p5.Vector.sub(target, this.pos)

    /**
     * Normalizing the steering behaviour
     * by setting the magnitude
     */

    desired.setMag(this.maxspeed);

    /**
     * We basically make the seekers go the mouse
     * by substracting their desired position (mouse position)
     * with their actual velocity
     * 
     */

    var steering = p5.Vector.sub(desired, random() * 2);
    steering.limit(this.maxforce);

    //Applying force
    this.applyForce(steering);
  }

  /**
   * The update function applies the calculated forces
   * every frame
   * 
   */

  this.update = function () {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  /**
   * The display function draw the seekers
   * 
   */

  this.display = function () {
    // Draw a triangle rotated in the direction of velocity
    var theta = this.vel.heading() + PI / 2;
    fill(0);
    stroke(200);
    strokeWeight(1);
    push();
    translate(this.pos.x, this.pos.y);
    rotate(theta);
    beginShape();
    vertex(0, -this.r * 2);
    vertex(-this.r, this.r * 2);
    vertex(this.r, this.r * 2);
    endShape(CLOSE);
    pop();
  }
}
