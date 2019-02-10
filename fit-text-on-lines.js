/*! fit-text-on-lines.js | Paul Browne */
!function(z){
	if(!z.ftol){
		z.ftol = function(){
			var ftols = document.querySelectorAll(".ftol");
			var i = ftols.length;
			function reCalc(obj, el, inc){
				el.style.fontSize = parseFloat(getComputedStyle(el).fontSize) + inc + "px";
				obj.height = el.getBoundingClientRect().height;
				obj.lineHeight = Math.floor(parseFloat(getComputedStyle(el).lineHeight)) * (parseFloat(getComputedStyle(ftols[i]).minHeight) || 1);
				return obj;
			}
			while(i--){
				var dims = {};
				reCalc(dims, ftols[i], 0);
				while(dims.height <= dims.lineHeight){
					reCalc(dims, ftols[i], 1);
				}
				while(dims.height > dims.lineHeight){
					reCalc(dims, ftols[i], -1);
				}
			}
		}
		z.addEventListener("resize", function(){
			z.ftol();
		})
		z.ftol();
	}
}(window)
