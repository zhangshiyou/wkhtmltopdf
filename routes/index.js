const router = require('koa-router')()
var fs = require("fs")
var path=require('path')
var formidable = require('formidable');  
var node_xlsx = require("node-xlsx");


// import list from '../public/javascripts/list'
let stuList=require('../data/stuList')
let seatList=require('../data/seatList')
let jsSeatList=require('../data/jsSeatList')
router.get('/', async (ctx, next) => {
    var wkhtmltopdf = require('wkhtmltopdf');
    // URL
    var names='座位号.pdf'
    var names1='准考证号.pdf'
    var names2='江苏.pdf'
    wkhtmltopdf('http://localhost:3100/no/', { 
        pageSize: 'letter' 
    }).pipe(fs.createWriteStream(`${path.resolve(__dirname,'../public/pdf')}/${names}`));
    wkhtmltopdf('http://localhost:3100/identity/', { 
        pageSize: 'letter' 
    }).pipe(fs.createWriteStream(`${path.resolve(__dirname,'../public/pdf')}/${names1}`));
    wkhtmltopdf('http://localhost:3100/jsSeatNo/', { 
        pageSize: 'letter' 
    }).pipe(fs.createWriteStream(`${path.resolve(__dirname,'../public/pdf')}/${names2}`));
    await ctx.render('index', {
        title: '打印中心',
    })
    // ctx.response.redirect(`http://localhost:3000/pdf/%E5%BA%A7%E4%BD%8D%E5%8F%B7.pdf`);
})
router.get('/identity', async (ctx, next) => {
    // let s
    await ctx.render('identity', {
        title: '准考证打印',
        list:stuList,
    })
})
router.get('/no', async (ctx, next) => {
    let s
    await ctx.render('no', {
        title: '座位号打印',
        list:seatList,
        s:s
    })
})
router.get('/jsSeatNo', async (ctx, next) => {
    await ctx.render('jsNo', {
        list:jsSeatList,
        title: '生成pdf',
    })
})
router.post('/jsList', async (ctx, next) => {
    var form = new formidable.IncomingForm();  
    form.encoding = 'utf-8';  
    form.uploadDir = path.join(__dirname,'../excel');  
    form.keepExtensions = true;//保留后缀  
    form.maxFieldsSize = 2*1024*1024;  
    let asd
    await new Promise(resolve =>{
        form.parse(ctx.req,function(err,fields,files){
            var tempPath = form.openedFiles[0].path
            if(err){
                console.log('文件上传错误！');  
                return ;  
            }
            // 上传时input的name属性
            var filename = files.file.name;  
            console.log(filename)
            var nameArray = filename.split('.');  
             var type = nameArray[nameArray.length-1];  
             var name=nameArray[0]
            //  var name=filename
            var date = new Date();  
            var time = '_' + date.getFullYear()+"_"+date.getMonth()+"_" +date.getDay()+"_" + date.getHours() +"_"+ date.getMinutes();  
            var avatarName = name + time +  '.' + type;  
            var newPath = form.uploadDir +"\\"+ avatarName ; 
            var oldPath= files.file.path
            console.log(newPath)
            fs.renameSync(oldPath,newPath);
            var obj = node_xlsx.parse(newPath);  
            // 只解析以第一sheet的数据
            var firstSheet=obj[0].data;
            var vals=[];
            for(var s=1,len=firstSheet.length;s<len;s++){
                var cur=firstSheet[s]
                vals.push({
                    stuName:cur[0],
                    schoolName:cur[1],
                    ticketNo:cur[2],
                    color:cur[3],
                })
            }
            asd=JSON.stringify(vals)
            resolve()
        })
    })
    ctx.body = asd
})
router.get('/string', async (ctx, next) => {
    ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
    ctx.body = {
        title: 'koa2 json'
    }
})

module.exports = router
