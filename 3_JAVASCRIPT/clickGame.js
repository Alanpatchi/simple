	
	var createdTime, clickedTime, reactionTime;
	
	var digits = '0123456789ABCDEF'.split('');
	
	function getRandomColor(){
		
		var color = '#';
		
		for(var i = 0; i < 6; i++){
			
			color += digits[Math.round(Math.random()*15)];
			
		}
		
		return color;
		
	}

	function makeBox(){
		
		setTimeout(function(){
			
			document.getElementById("box").style.top = Math.random()*400+'px';
			
			document.getElementById("box").style.left = Math.random()*1100+'px';
			
			document.getElementById("box").style.backgroundColor = getRandomColor();
			
			if(Math.random() < 0.5){
				
				document.getElementById("box").style.borderRadius = "100px";
				
			} else {
				
				document.getElementById("box").style.borderRadius = "0px";
				
			}

			document.getElementById("box").style.display="block";
			
			createdTime = Date.now();
					
		},5000*Math.random());	

	}
	
	document.getElementById("box").onclick = function(){
		
		clickedTime = Date.now();
		
		reactionTime = (clickedTime - createdTime )/ 1000;
		
		document.getElementById("reactionTime").innerHTML = reactionTime;
		
		this.style.display="none";
		
		makeBox();
		
	}
	
	document.getElementById("start").onclick = function(){
	
		document.getElementById("start").style.display="none";
		
	makeBox();
	
	}