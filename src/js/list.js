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
        getList();
        getPager();
        function getList(currentPage) {
            var searchText = $('#searchText').val();
            var bookList = $('#bookList');
            $.ajax({
                url: '/api/v2/book/search',
                type: 'GET',
                data: {
                    q: searchText,
                    start: currentPage
                },
                success: function(res){
                    dataList = res.books;
                    var bookItem = '';
                    for(var i=0;i<dataList.length;i++){
                        var author = [];
                        for(var j=0;j<dataList[i].author.length;j++){
                            author += dataList[i].author[j];
                        }
                        bookItem += '<tr><td>' + dataList[i].title + '</td><td>' + author + '</td><td><img src="' + dataList[i].image + '"></td><td>' + dataList[i].summary + '</td><td>' + dataList[i].price + '</td></tr>';
                    }
                    bookList.append(bookItem);
                    getPager(res.total,res.count,res.start);
                }
            })
        };

        function getPager(totalPages,count,currentPage) {
            var options = {
                currentPage: currentPage,
                totalPages: Math.ceil(totalPages/count),
                numberOfPages: 10
            }
        };
    })
})
