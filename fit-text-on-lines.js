/*! fit-text-on-lines.js | Paul Browne */
(function(){
  function debouncedResize(a,b) {  
    return window.addEventListener("resize",function() {    
      clearTimeout(b),      
      b = setTimeout(a,150)
    }),a
  }  
  function calc(element, increment){
    var scrollHeight = element.scrollHeight;    
    var fontSize = parseFloat(getComputedStyle(element).fontSize) + (increment || 0);    
    var lineHeight = parseFloat(getComputedStyle(element).lineHeight);    
    return {
      ratio: scrollHeight/lineHeight,   
      fontSize: fontSize + "px"      
    };
  }  
  debouncedResize(function() {         
    var element = document.querySelectorAll(".js-fit-text-on-lines");        
    var i = element.length;    
    while(i--) {               
      element[i].setAttribute("style", "");              
      var contentLines;              
      if(getComputedStyle(element[i]).content){      
        contentLines = getComputedStyle(element[i]).content.match(/\d+/g)[0];        
      }                          
      var lines = element[i].getAttribute("data-fit-text-on-lines") || contentLines || 1;               
      var wasPerfect = false;                           
      while(calc(element[i]).ratio <= lines &&! wasPerfect) {                
        element[i].style.fontSize = calc(element[i], 1).fontSize;                    
        wasPerfect = false;                    
      }                          
      while(calc(element[i]).ratio > lines) {                
        element[i].style.fontSize = calc(element[i], -1).fontSize;                    
        wasPerfect = true;            
      }      
    }
  })();
})();
