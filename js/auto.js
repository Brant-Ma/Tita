$.fn.auto = function() {
    
    var target = $(this);
    var str = target.html(); // 取出预设文本
    var index = 0;
    $(this).html(''); // 清空预设文本

    var timer = setInterval(function() {
        var current = str.substr(index, 1);
        if (current == '<') {
            index = str.indexOf('>', index) + 1;
        } else {
            index++;
        }
        target.html(str.substring(0, index) + '_');
        if (index >= str.length) clearInterval(timer);
    }, 100);
};

$("#auto").auto();
