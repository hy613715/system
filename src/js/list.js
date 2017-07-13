$(function(){
    var delBtns = $('.table tr td:last-child button:last-child');
    var editBtns = $('.table tr td:last-child button:first-child');
    delBtns.bind('click',function(){
        var d = dialog({
            title: '删除',
            content: '按钮回调函数返回 false 则不许关闭',
            okValue: '确定',
            ok: function () {
                this.title('提交中…');
                return false;
            },
            cancelValue: '取消',
            cancel: function () {}
        });
        d.show();
    })
    editBtns.bind('click',function(){
        var d = dialog({
            title: '编辑',
            content: '按钮回调函数返回 false 则不许关闭',
            okValue: '确定',
            ok: function () {
                this.title('提交中…');
                return false;
            },
            cancelValue: '取消',
            cancel: function () {}
        });
        d.show();
    })
})