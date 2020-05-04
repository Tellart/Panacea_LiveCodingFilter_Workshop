var capture, tracker
var w = 640
var h = 480

function setup() {
  createCanvas(w, h)
  
  // setup the webcam capture
  capture = createCapture(VIDEO)
  capture.hide()
  capture.size(w,h)
  
  // setup the face tracker
  tracker = new clm.tracker()
  tracker.init()
  tracker.start(capture.elt)
}

function draw() {
  
  // use the lines below to mirror the image
  // scale(-1, 1)
  // translate(-w, 0);
  image(capture, 0, 0, w, h)

  // get the face positions from the tracker
  let positions = tracker.getCurrentPosition()
  
  if(positions.length>0) {
    fill(255)
    noStroke()
    for(var i = 0; i < positions.length; i++) {
      ellipse(positions[i][0], positions[i][1], 5, 5)
      text(i, positions[i][0]+5, positions[i][1])
    }
    
    // now if you just want to draw a rectangle on point 1
    // positions[1][0] is the x position (0) for point 1
    // positions[1][1] is the y position (1) for point 1
    fill(255, 0, 0)
    rect(positions[1][0], positions[1][1], 20, 20)
    
    // if you want to create a shape from multiple points you can use:
    beginShape()
    vertex(positions[30][0], positions[30][1])
    vertex(positions[68][0], positions[68][1])
    vertex(positions[29][0], positions[29][1])
    vertex(positions[67][0], positions[67][1])
    vertex(positions[28][0], positions[28][1])
    vertex(positions[70][0], positions[70][1])
    vertex(positions[31][0], positions[31][1])
    vertex(positions[69][0], positions[69][1])
    endShape(CLOSE)
  }
  
}
