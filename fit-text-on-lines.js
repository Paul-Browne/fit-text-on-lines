/*! fit-text-on-lines.js | Paul Browne */
function fittextonlines() {
    function bodyHasScrollbar(){
        if (document.documentElement.getBoundingClientRect().height > window.innerHeight){
            return true;
        }else {
            return false;
        }
    }
    function debouncedResize(b, c) {
        var d = [window.innerWidth];
        return window.addEventListener("resize", function() {
            var e = window.innerWidth,
                f = d.length;
            d.push(e);
            if (d[f] !== d[f - 1]) {
                clearTimeout(c);
                c = setTimeout(b, 100);
            }
        }), b;
    }
    debouncedResize(function() {
        var element = document.querySelectorAll(".js-fit-text-on-lines, .js-ftol");
        var j = element.length;
        var i = 0;
        var noScrollbar = 0;
        while (i<j) {
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
                if (inc >= 0.25) {
                    while (linesUsed <= lines && inc >= 0.25) {
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
                if (inc >= 0.125) {
                    while (linesUsed > lines && inc >= 0.125) {
                        beforeFontSize = element[i].style.fontSize;
                        element[i].style.fontSize = parseFloat(element[i].style.fontSize) - inc + "px";
                        linesUsed = Math.round(element[i].scrollHeight / (lh * parseFloat(element[i].style.fontSize)));
                        if (inc == 0.125) {
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
            if (bodyHasScrollbar()){
                noScrollbar++;
            }
            i++;
            if (document.body.style.overflowY != "scroll" && noScrollbar && i == j){
                document.body.style.overflowY = "scroll";
                noScrollbar = 0;
                i = 0;
            }
        }
        if(document.body){
            document.body.style.overflowY = "";
        }
    })();
}
