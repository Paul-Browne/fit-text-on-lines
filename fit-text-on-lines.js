/*! fit-text-on-lines.js | Paul Browne */
(function() {
  
    function debouncedResize(a, b) {
        return window.addEventListener("resize", function() {
            clearTimeout(b),
                b = setTimeout(a, 150)
        }), a
    }
    debouncedResize(function() {
        var element = document.querySelectorAll(".js-fit-text-on-lines, .js-ftol");
        var i = element.length;
        while (i--) {
            element[i].setAttribute("style", "");
            element[i].style.fontSize = "256px";
            var lines = parseFloat(getComputedStyle(element[i]).minHeight) || 1;
            var lineHeight = parseFloat(getComputedStyle(element[i]).lineHeight);
            var linesUsed = Math.round(element[i].scrollHeight / lineHeight);
            var fs = getComputedStyle(element[i]).fontSize;
            var lh = lineHeight / 256;
            var inc = 128;
            var beforeFontSize;
                      
            decreaseFontSize();
          
            function increaseFontSize() {
                if (inc >= 0.5) {
                    while (linesUsed <= lines && inc >= 0.5) {
                        beforeFontSize = element[i].style.fontSize;
                        element[i].style.fontSize = parseFloat(element[i].style.fontSize) + inc + "px";
                        linesUsed = Math.round(element[i].scrollHeight / (lh * parseFloat(element[i].style.fontSize)));
                        if (beforeFontSize == element[i].style.fontSize && inc < 1) {                       
                            inc = 0.1;
                            lines = 0;
                        }
                    inc = inc / 2;                      
                    }
                    decreaseFontSize();
                }
            }
            function decreaseFontSize() {
                if (inc >= 0.25) {
                    while (linesUsed > lines && inc >= 0.25) {              
                        beforeFontSize = element[i].style.fontSize;
                        element[i].style.fontSize = parseFloat(element[i].style.fontSize) - inc + "px";
                        linesUsed = Math.round(element[i].scrollHeight / (lh * parseFloat(element[i].style.fontSize)));                      
                        if (inc == 0.25) {
                            element[i].style.fontSize = parseFloat(element[i].style.fontSize) - inc + "px";
                        }                      
                        if (beforeFontSize == element[i].style.fontSize && inc < 1) {
                            inc = 0.1;
                            linesUsed = 0;
                        }
                    inc = inc / 2;
                    }
                    increaseFontSize();
                }
            }
        }
    })();
})();
