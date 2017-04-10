function Particle(x, y, m, g) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.G = 0.05;
    this.mass = m;

    /**
     * The good ol wat of applying new forces
     * taught by Shiffman in his nature of code courses.
     * This time we are actually taking mass into account.
     * 
     */

    this.applyForce = function (force) {
        if (force != undefined) {
            var f = force.copy();
            f.div(this.mass);
            this.acc.add(f);
        } else {
            return false;
        }
    }

    this.update = function () {
        this.vel.add(this.acc)
        this.pos.add(this.vel)
        this.acc.set(0, 0)
    }

    this.display = function () {
        fill(255, 150)
        stroke(255)
        ellipse(this.pos.x, this.pos.y, this.mass * 10, this.mass * 10)
    }

    /**
     * To calculate attracion we calculate the force (or velocity) by
     * substracting the particle's position with the one of every other particle
     * 
     * We get the distance by calculating the magnitude
     * 
     * Afterwards we normalize the force so we can effectively multiply it
     * by the strenght without getting extreme values
     * 
     * Gravitational strenght is calculated just like real gravitational strenght
     * Fx = Gravitational force * mass * all other masses / distance * distance
     */

    this.calculateAttraction = function (particle) {
        var force = p5.Vector.sub(this.pos, particle.pos)
        var distance = force.mag()
        distance = constrain(distance, 5, 25)
        force.normalize()
        var strengh = (this.G * this.mass * particle.mass) / (distance * distance)
        force.mult(strengh)
        return force

    }

    /**
     * We simply reverse the velocity of the
     * particles when they hit the edges
     * 
     */

    this.edges = function () {
        if (this.pos.y > height) {
            this.vel.y *= -1;
            this.pos.y = height;
        }
        if(this.pos.y < 0) {
            this.vel.y *= -1;
            this.pos.y = 0;
        }
        if (this.pos.x > width) {
            this.vel.x *= -1;
            this.pos.x = width;
        }
        if(this.pos.x < 0) {
            this.vel.x *= -1;
            this.pos.x = 0;
        }
    }
}