var
gulp = require('gulp'),
ts = require('gulp-typescript'),
less = require('gulp-less')
group = require('gulp-group-files')
concat= require('gulp-concat')
ngAnnotate = require('gulp-ng-annotate')
jade = require('gulp-jade')
gulpIf = require('gulp-if')
minJs = require('gulp-uglify')
minCss = require('gulp-minify-css')
flat = require('gulp-flatten'),
jsonMin = require('gulp-jsonmin'),
rename = require('gulp-rename'),
argv = require('yargs').argv;

var sourceDir = './src', destinDir = './.tmp/public';

gulp.task('less', function () {
  return gulp.src([sourceDir + '/**/*.less', '!./src/client/variables.less'])
    .pipe(less())
    .pipe(concat('site.css'))
    .pipe(gulpIf(argv.production || argv.p, minCss()))
    .pipe(gulp.dest(destinDir));
});

gulp.task('jade', function(){
  return gulp.src(sourceDir + '/*/views/**/*.jade')
    .pipe(jade())
    .pipe(gulp.dest(destinDir));
});

var languagePackage = function(code){
  return gulp.src([sourceDir + '/**/'+ code +'/*.lang.json' ])
  .pipe(flat())
  .pipe(rename({ extname : '' }))
  .pipe(jsonMin())
  .pipe(gulp.dest(destinDir + '/resources/' + code));
}
var jsPackage = function(name){
  console.log(sourceDir + '/'+ name +'/**/*.ts');
  return gulp.src([ './typings/**/*.d.ts', '!./src/**/structure/*.ts', sourceDir + '/**/*.d.ts', sourceDir + '/'+ name +'/**/*.ts' ])
    .pipe(ts({ mode : 'amd' }))
    .pipe(ngAnnotate())
    .pipe(concat(name + ".js"))
    .pipe(gulp.dest(destinDir + "/" + name));
};

gulp.task('structureTs', function(){
  return gulp.src(['./typings/**/*.d.ts', './src/**/structure/*.ts' ])
  .pipe(ts({ mode : 'amd' }))
  .pipe(concat('structure.js'))
  .pipe(gulpIf(argv.production || argv.p, minJs()))
  .pipe(gulp.dest(destinDir));

});

gulp.task('clientTs', ['structureTs'], function(){
  if(argv.production || argv.p){
    return gulp.src([ './typings/**/*.d.ts',sourceDir + '/**/*.d.ts', sourceDir + '/**/*.ts' ])
      .pipe(ts({ mode : 'amd' }))
      .pipe(ngAnnotate())
      .pipe(concat('site.min.js'))
      .pipe(minJs())
      .pipe(gulp.dest(destinDir));
  }else{
    jsPackage('application');
    jsPackage('auth');
    jsPackage('users');
    jsPackage('settings');
  }
});
gulp.task('locale', function(){
  languagePackage('en-US');
  languagePackage('pl-PL');
});

gulp.task('copyAssets', function(){
  return gulp.src('./assets/**')
  .pipe(gulp.dest(destinDir))
});

gulp.task('default', [ 'copyAssets', 'less' , 'clientTs', 'jade', 'locale' ], function () {});

//TODO: move to separated watchers
gulp.task('watch', [ 'default'], function() {
  return gulp.watch(sourceDir + '/**/*.{ts,jade,less,json}', [ 'default' ]);
});
