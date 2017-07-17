var url = require('url'),
    fs = require('fs'),
    path = require('path');

// 加载gulp插件
var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect'),
    proxy = require('http-proxy-middleware');

//web服务器
gulp.task('server',function(){
    connect.server({
        root: './',
        port: 8090,
        livereload: true,
        middleware: function(connect, opt) {
            return [
                proxy('/api',  {
                    target: 'https://api.douban.com/',
                    changeOrigin:true,
                    pathRewrite: {
                        '^/api': '/'
                    }
                })
            ]
        }

    });
});


// 默认任务
gulp.task('default', ['server']);