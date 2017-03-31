window.onload = function(){
	var oTab = document.getElementById("tab");
	var oLi = oTab.getElementsByTagName("li");
	var oDiv = oTab.getElementsByTagName("div");
	for(var i=0;i<oLi.length;i++){
		oLi[i].index = i;
		oLi[i].onmouseover = function(){
			for(var j=0;j<oLi.length;j++){
				oDiv[j].style.display = "none";
			}
			this.style.background = "#F94A14";
			oDiv[this.index].style.display = "block";
		}
		oLi[i].onmouseout = function(){
			this.style.background = "#FF6A05";
			oDiv[this.index].style.display = "none";
		}
		oDiv[i].onmouseover = function(){
			this.style.display = "block";
		}
		oDiv[i].onmouseout = function(){
			this.style.display = "none";
		}
	}

}