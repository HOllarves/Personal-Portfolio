// Henry Ollarves
// inspired by https://www.kadenze.com/courses/the-nature-of-code
// by Daniel Shiffman

var vehicle = [],
  vehicleMode = true,
  vehiculeNumber = 30,
  vehicleMode = true,
  particles = [],
  particleNumber = 30,
  G = 0.05,
  particlesCreated = false,
  particleMode = false,
  shockTimer = 8000,
  shockStatus = false,
  mousePressedCounter = 0

function setup() {
  createCanvas(1920, 900)
  for (let i = 0; i < vehiculeNumber; i++) {
    vehicle[i] = new Vehicle(random(width), random(height))
  }
}

function draw() {
  background(0)

  /**
   * In each draw iteration we check in what
   * mode we are currently on
   * 
   */

  if (mousePressedCounter > 10) {
    particleMode = true
    vehicleMode = false
  }
  if (mousePressedCounter > 20) {
    particleMode = true
    vehicleMode = true
    text("Loving the physics.", 200, 200);
  }

  /**
   * If default mode, we draw the vehicules
   * 
   */

  if (vehicleMode) {
    for (let i = 0; i < vehiculeNumber; i++) {
      if (!shockStatus) {
        let target = createVector(mouseX, mouseY)
        vehicle[i].seek(target)
        vehicle[i].update()
        if (vehicle[i].pos === target) {

        } else {
          vehicle[i].display()
        }
      } else {
        let target = createVector(random(width), random(height))
        vehicle[i].wander(target)
        vehicle[i].update()
        vehicle[i].display()
      }
    }
  }

  /**
   * In particleMode we draw particles :)
   * 
   */
  
  if (particleMode) {
    if (!particlesCreated) {
      createParticles()
    }
    for (let i = 0; i < particles.length; i++) {
      for (let j = 0; j < particles.length; j++) {
        if (i !== j) {
          let gravitational_attraction = particles[j].calculateAttraction(particles[i]);
          particles[i].applyForce(gravitational_attraction);
        }

      }
      let gravity = createVector(0, G * particles[i].mass);
      particles[i].applyForce(gravity);
      particles[i].update();
      particles[i].edges();
      particles[i].display();
    }
  }
}

/**
 * This function will create the particles just once.
 * Using the flag particlesCreated to dynamically add them but only once.
 * 
 */

function createParticles() {
  for (let i = 0; i < particleNumber; i++) {
    particles[i] = new Particle(random(width), random(height), random(1, 15))
  }
  particlesCreated = true;
}

/**
 * In every mousePressed we confuse the seekers
 * while incresing the mousePressedCounter
 */

function mousePressed() {
  shockStatus = true;
  setTimeout(() => {
    shockStatus = false
  }, shockTimer)
  mousePressedCounter += 1;
}

/**
 * This function restore the seekers to their normal state
 * 
 */

function restoreSeekers() {
  shockStatus = false
}
