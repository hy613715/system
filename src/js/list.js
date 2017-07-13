$(function(){
    var delBtns = $('.table tr td:last-child button:last-child');
    var editBtns = $('.table tr td:last-child button:first-child');
    var tbTrs = $('.table tr');
    delBtns.bind('click',function(){
        console.log($(this).parents('tr').index());
        var index = $(this).parents('tr').index();//获取当前点击按钮所在tr的索引值
        var d = dialog({
            title: '删除',
            content: '按钮回调函数返回 false 则不许关闭',
            okValue: '确定',
            ok: function () {
                this.title('提交中…');
                tbTrs[index].remove();
                // return false;
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