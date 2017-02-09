/**
 * Created by FLEX_LD on 2017/1/3.
 */
// 由于页面加载顺序的问题，这里的js必须在页面底部引入才能正常工作
/*$("#btn").click(function() {
    $("#box").toggle(2000);
});*/

// 使用JQuery等待所有DOM绘制完毕执行
/*
$(document).ready(function() {
    $("#btn").click(function() {
        $("#box").toggle(2000);
    });
});*/

$(function() {
    $("#btn").click(function() {
        $("#box").toggle(2000);
    });
})
