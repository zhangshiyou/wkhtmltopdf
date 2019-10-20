const router = require('koa-router')()
var fs = require("fs")
var path=require('path')
var formidable = require('formidable');  
var node_xlsx = require("node-xlsx");
var request = require("request");

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
router.get('/code', async (ctx, next) => {
    var s
    var url='https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx93d20a0261dce3d2&secret=5d80313927a26524883fce37a6d04fc5'
    // await request(url, function (error, response, body) {
    //     if (!error && response.statusCode == 200) {
    //         console.log(body) // Show the HTML for the baidu homepage.
    //     }
    // });
    var url_1='https://api.weixin.qq.com/cgi-bin/wxaapp/createwxaqrcode'
    var token='26_W9GlXmbKRX3m_wVf6Rd-9epwmWM5VtO6HdLpeu_NS_qhpV00Nrmvm7y7QNbP7qJXmoDahRLPcgKLe1IC3RRavNDVMUjAgv3-xnZf253esvqYnCE__J6hxZ234jlY39N1yk8FjabCKmi8lYicHFXdAHAPNF'
    console.log(ctx)
    request({
        url:`${url_1}?access_token=${token}&path=pages/index/main`,
        method: "post",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            access_token:token,
            path:"pages/index/main"
        })
    }, await function (error, response, body) {
        // fs.readFile('./public/images/favicon.ico',function (err, origin_buffer) {
        //     console.log(Buffer.isBuffer(origin_buffer))
        //     fs.writeFile('logo_bugger.png',origin_buffer,function (err) {
        //        if (err)
        //            console.log(err);
        //     })
        //     //var base64Image = new Buffer(origin_buffer).toString('base64')
        //     var base64Image = origin_buffer.toString('base64')
        //     console.log(base64Image);
         
        //     var decodedImage = Buffer.from(base64Image,'base64');
        //     console.log(Buffer.compare(origin_buffer,decodedImage))
         
        //     fs.writeFile('logo_decoded.png',decodedImage,function (err) {
        //         if (err)
        //             console.log(err);
        //     })
        // })
        if (!error && response.statusCode == 200) {
            var jsonS=Buffer.from(body)
            var base64Img = body.toString('base64'); // base64图片编码字符串
            // console.log(base64Img)
            var dataBuffer = Buffer.from(base64Img);
            console.log(dataBuffer)
            s=dataBuffer.toString('base64')
            // var dataBuffer=base64.b64encode(base64Img)
            fs.writeFile('./public/images/1wsa23.png', dataBuffer, function(err,w,e,r,t) {
                if(err) {
                    console.log(err)
                }else{
                    console.log('保存成功')
                }
            });
            // console.log(decodeImg) // Show the HTML for the baidu homepage.
        }
    });
    await ctx.render('code', {
        s:s,
        title: '生成二维码',
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
    ctx.append('userName','111111');
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
