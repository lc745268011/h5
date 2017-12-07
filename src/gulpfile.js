//以下require需要的module  
var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    notify=require('gulp-notify');   //提示
    del = require('del');
    imageMin = require('gulp-imagemin');
//压缩JS  
gulp.task('minifyjs', function() {
    return gulp.src(['./res/js/*.js'])  //选择合并的JS
        .pipe(concat('main.js'))   //合并js
        .pipe(gulp.dest('./dist/js'))         //输出
        .pipe(rename({suffix:'.min'}))     //重命名
        .pipe(uglify())                    //压缩
        .pipe(gulp.dest('./dist/js'))            //输出
        .pipe(notify({message:"js task ok"}));    //提示
});
//压缩CSS  
gulp.task('minifycss', function() {
    return gulp.src('./res/css/*.css')      //设置css
        .pipe(concat('main.css'))      //合并css文件到"order_query"
        .pipe(gulp.dest('./dist/css'))           //设置输出路径
        .pipe(rename({suffix:'.min'}))         //修改文件名
        .pipe(minifycss())                    //压缩文件
        .pipe(gulp.dest('./dist/css'))            //输出文件目录
        .pipe(notify({message:'css task ok'}));   //提示成功
});
//压缩图片
gulp.task('imagemin', function () {
    gulp.src('./res/img/*.{png,jpg,gif,ico}')
        .pipe(imageMin({
            optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
        }))
        .pipe(gulp.dest('./dist/img'));
});
//执行压缩前，先删除文件夹里的内容  
//执行删除的时候不要把目录定在build的子目录中，windows删除目录的同时会报错  
gulp.task('clean', function(cb) {
    del(['./dist/css', './dist/js','./dist/img'], cb)
});
//在任务数组中放上面要执行的任务  
gulp.task('default', ['clean', 'minifyjs', 'minifycss','imagemin']);