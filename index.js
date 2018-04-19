katzDeli = [];
number = [];

function takeANumber(katzDeli){
  for (i = 0; i < number.length; i++){
  number.push(i);
  }

  return  " You are number " + number 
}

function nowServing(katzDeli){
    
 if (katzDeli.length > 0){
	
	  var currServing = "Currently serving " + katzDeli[0] + ".";
    	
    	katzDeli.shift();
    	
    	return currServing;
    	
    } else {
      
      return "There is nobody waiting to be served!"; }

}



function currentLine(katzDeli) {

var lineNum = [];

  for (let i = 0; i < katzDeli.length; i++) {
    
    lineNum.push(" " + [i + 1] + ". "  + katzDeli[i])
    
  }
  
  if (katzDeli.length === 0) {
    
    return "The line is currently empty.";
  
    
  } else {
  
  return("The line is currently:" + lineNum ); }
  


}