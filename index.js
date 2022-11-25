// code your solution here
function saturdayFun(activity = 'roller-skate') { 
    return(`This Saturday, I want to ${activity}!`); 
  } 
saturdayFun('roller-skate'); 
 
function mondayWork(activity = 'go to the office'){ 
    return(`This Monday, I will ${activity}.`); 
} 
mondayWork('work from home.'); 
 
function wrapAdjective(wrapper = "*") { 
    function message(string = "special") { 
      return `You are ${wrapper}${string}${wrapper}!`; 
    }; 
    return message; 
  }; 
wrapAdjective("||"); 
result("a hard worker");
