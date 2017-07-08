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
            var lines = parseFloat(getComputedStyle(element[i]).minHeight) || 1;
            var lineHeight = parseFloat(getComputedStyle(element[i]).lineHeight);
            var linesUsed = Math.round(element[i].scrollHeight / lineHeight);
            var fs = getComputedStyle(element[i]).fontSize;
            var lh = lineHeight / parseFloat(fs);
            var inc = Math.min((2 * Math.pow(2, 2 * (Math.abs(linesUsed - lines)))), parseFloat(fs) - 2);
            var beforeFontSize;
            element[i].style.fontSize = fs;
            if (linesUsed > lines) {
                decreaseFontSize();
            } else {
                increaseFontSize();
            }
            function increaseFontSize() {
                if (inc >= 0.5) {
                    while (linesUsed <= lines) {
                        beforeFontSize = element[i].style.fontSize;
                        element[i].style.fontSize = parseFloat(element[i].style.fontSize) + inc + "px";
                        linesUsed = Math.round(element[i].scrollHeight / (lh * parseFloat(element[i].style.fontSize)));
                        if (beforeFontSize == element[i].style.fontSize) {
                            inc = 0.1;
                            lines = 0;
                        }
                    }
                    inc = inc / 2;
                    decreaseFontSize();
                }
            }
            function decreaseFontSize() {
                if (inc >= 0.25) {
                    while (linesUsed > lines) {
                        beforeFontSize = element[i].style.fontSize;
                        element[i].style.fontSize = parseFloat(element[i].style.fontSize) - inc + "px";
                        linesUsed = Math.round(element[i].scrollHeight / (lh * parseFloat(element[i].style.fontSize)));
                        if (beforeFontSize == element[i].style.fontSize) {
                            inc = 0.1;
                            linesUsed = 0;
                        }
                    }
                    inc = inc / 2;
                    increaseFontSize();
                }
            }
        }
    })();
})();
