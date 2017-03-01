var target = $("#fake");
var str = target.html(); // 取出预设文本
var index = 0; 
$("#fake").html(''); // 清空预设文本
 
$.fn.fake = function() {
	var current = str.substr(index, 1);
	if (current == '<') { 
    	index = str.indexOf('>', index) + 1;
  	} else {
    	index++;
  	}
	target.html(str.substr(0, index));
};
 
document.onkeydown = function() { 
	$("#fake").fake();
}
