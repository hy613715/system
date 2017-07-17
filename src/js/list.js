$(function(){
    var delBtns = $('.table tr td:last-child button:last-child');
    var editBtns = $('.table tr td:last-child button:first-child');
    var tbTrs = $('.table tr');
    delBtns.on('click',function(){
        console.log($(this).parents('tr').index());
        var index = $(this).parents('tr').index();//获取当前点击按钮所在tr的索引值
        var d = dialog({
            title: '删除',
            content: '按钮回调函数返回 false 则不许关闭',
            okValue: '确定',
            ok: function () {
                this.title('提交中…');
                console.log(tbTrs[index])
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
    //search
    var oSearch = $('#searchBtn');
    oSearch.click(function(){
        var searchText = $('#searchText').val();
        $.ajax({
            url: '/api/v2/book/search',
            type: 'GET',
            data: {
                q:searchText
            },
            success: function(res) {
                var booksInfo = [];
                booksInfo = res.books;
                var bookTab = $('#bookTab');
                var singleBookInfo =
                    '<tr>
                        <td>' + booksInfo.title + '</td>
                        <td>' + booksInfo.images.small + '</td>
                        <td>' + booksInfo.author[0] + '</td>
                        <td>' + booksInfo.summary + '</td>
                        <td>' + booksInfo.price + '</td>
                    </tr>';
                for(var i=0;i<booksInfo.length;i++) {
                    bookTab.append(singleBookInfo)
                }
            }
        })
    })
})
