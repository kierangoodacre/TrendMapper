// var colours = ["#74FF70", "#7DFF6E", "#87FF6D", "#90FF6C", "#99FF6B", "#A3FF69", "#ADFF68", "#B7FF67", "#C1FF66", "#CBFF65", "#D6FF63", "#E0FF62", "#EBFF61", "#F6FF60", "#FFFC5F", "#FFF15D", "#FFE55C",
// 							"#FFD95B", "#FFCE5A","#FFC259", "#FFB657", "#FFA956", "#FF9D55", "#FF9054", "#FF8353", "#FF7651", "#FF6950", "#FF5C4F", "#FF4E4E", "#FF4D59"];


var trendingIndexJson;
var colors;

$.getJSON("/trendingIndex", function(data) {
	trendingIndexJson = data;
});

var BoroughColor = function(){
	this.colors = ["#FF8080", "#FF0000"];
	this.heatColor = 3;
};


Color.prototype.changeBackground = function(borough){
	if (trendingIndexJson[borough] > 70) {
		return colors[1]
	}
}
