$(function(){
    var delBtns = $('.table tr td:last-child button:last-child');
    for(var i=0;i<delBtns.length;i++){
        $(this).click(function(){
            return i;
        });
    }
})