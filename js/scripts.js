
function nope(){
	document.getElementById("next").disabled = true;
	document.getElementById("next").value = "Nope!";
}

function almost(){
	document.getElementById("next").disabled = true;
	document.getElementById("next").value = "..almost";
}

function yay(){
	document.getElementById("next").disabled = false;
	document.getElementById("next").value = "Yay!";
}

// CLUES

function validateAppleJuice() {
  var x = document.getElementById("applejuice").value.toLowerCase();
	  if (x != 'aj') {
    		nope();
	    } else {
	    	yay();
	    }
}

function validateClu1() {
  var x = document.getElementById("clu1").value.toLowerCase();
	  if (x != 'jurassic') {
    		nope();
	    } else {
	    	yay();
	    }
}

function validateClu810() {
  var x = document.getElementById("clu810").value.toLowerCase();
	  if (x != 'ballona') {
    		nope();
	    } else {
	    	yay();
	    }
}

function validateClu1130() {
  var x = document.getElementById("clu11").value.toLowerCase();
  var y = document.getElementById("clu30").value.toLowerCase();
	  if (x != 'lincoln' && y != 'rose') {
    		nope();
	    } else if (x != 'lincoln' || y != 'rose'){
				almost();
	    } else {
	    	yay();
	    }
}

function validateClu121() {
  var x = document.getElementById("clu121").value.toLowerCase();
	  if (x != 'hammer') {
    		nope();
	    } else {
	    	yay();
	    }
}

// Answers

function validateAnswer1() {
  var x = document.getElementById("answer1").value.toLowerCase();
	  if (x != 'south') {
    		nope();
	    } else {
	    	yay();
	    }
	console.log("south");
}

function validateAnswer810() {
  var x = document.getElementById("answer810").value.toLowerCase();
	  if (x != 'art') {
    		nope();
	    } else {
	    	yay();
	    }
	console.log("art");
}

function validateAnswer1130() {
  var x = document.getElementById("answer1130").value.toLowerCase();
	  if (x != 'banh mi') {
    		nope();
	    } else {
	    	yay();
	    }
  console.log("bahn mi");
}

function validateAnswer121() {
  var x = document.getElementById("answer121").value.toLowerCase();
	  if (x != 'gridwork') {
    		nope();
	    } else {
	    	yay();
	    }
  console.log("gridwork");
}
