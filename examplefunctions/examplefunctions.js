function drawEyes(positions) {
	// draw the eye outlines
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
    
    beginShape()
    vertex(positions[23][0], positions[23][1])
    vertex(positions[63][0], positions[63][1])
    vertex(positions[24][0], positions[24][1])
    vertex(positions[64][0], positions[64][1])
    vertex(positions[25][0], positions[25][1])
    vertex(positions[65][0], positions[65][1])
    vertex(positions[26][0], positions[26][1])
    vertex(positions[66][0], positions[66][1])
    endShape(CLOSE)
    
    // draw the iris
    ellipse(positions[32][0], positions[32][1], 15, 15);
    ellipse(positions[27][0], positions[27][1], 15, 15);
}

function drawNose(positions) {
	// draw the nose outlines
    beginShape()
    for(var i = 34; i < 42; i++) {
      vertex(positions[i][0], positions[i][1])
    }
    endShape(CLOSE)
}

function drawMouth(positions) {
	// draw the mouth outlines
    beginShape()
    for(var i = 44; i < 56; i++) {
      vertex(positions[i][0], positions[i][1]) 
    }
    endShape(CLOSE)
    
    // draw the mouth opening
    beginShape()
    vertex(positions[44][0], positions[44][1])
    for(var i = 56; i < 59; i++) {
      vertex(positions[i][0], positions[i][1]) 
    }
    vertex(positions[50][0], positions[50][1])
    for(var i = 59; i < 62; i++) {
      vertex(positions[i][0], positions[i][1]) 
    }
    endShape(CLOSE)
}

function drawFace(positions) {
	// draw the face outlines
    beginShape()
    for(var i = 0; i < 19; i++) {
      vertex(positions[i][0], positions[i][1]) 
    }
    for(var i = 22; i > 18; i--) {
      vertex(positions[i][0], positions[i][1]) 
    }
    endShape(CLOSE)
}