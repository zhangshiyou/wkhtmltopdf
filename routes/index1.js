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
    await ctx.render('code', {
        title: '生成二维码',
    })
})
function getToken(){
    return new Promise(resolve=>{
        var grant_type='client_credential'
        var appid='wx93d20a0261dce3d2'
        var secret='5d80313927a26524883fce37a6d04fc5'
        var url=`https://api.weixin.qq.com/cgi-bin/token?grant_type=${grant_type}&appid=${appid}&secret=${secret}`
        request({
            url:`${url}`,
            method: "get",
            headers: {
                "content-type": "application/json",
            },
            // body: JSON.stringify({
            //     grant_type:token,
            //     path:"pages/index/main"
            // })
        }, async function (error, response, body) {
            resolve(body)
        });
    })
}
function getQrcode(){
    return new Promise(resolve=>{
        getToken().then(re=>{
            var tokenObj=JSON.parse(re)
            var s
            var url_1='https://api.weixin.qq.com/cgi-bin/wxaapp/createwxaqrcode'
            var url='https://api.weixin.qq.com/wxa/getwxacodeunlimit'
            var token=tokenObj['access_token']
            var scene=encodeURIComponent("from=prob")
            var form={
                // "access_token":token,
                "page":"pages/index/main",
                "scene":"from=prob"
            }
            console.log(JSON.stringify(form))
            request({
                url:`${url}?access_token=${token}`,
                // url:`${url}?access_token=${token}&path=pages/index/main`,
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    "page":"pages/index/main",
                    "scene":'asd',
                    "encoding":"binary"
                })
            }, async function (error, response, body) {
                debugger
                if (!error && response.statusCode == 200) {
                    var jsonS=Buffer.from(body)
                    var base64Img = body.toString('base64'); // base64图片编码字符串
                    var dataBuffer = Buffer.from(base64Img,'utf8');
                    s=dataBuffer.toString('base64')
                    fs.writeFile('./public/images/1wsa23.png', dataBuffer, function(err,w,e,r,t) {
                        if(err) {
                            console.log(err)
                        }else{
                            console.log('保存成功')
                        }
                        resolve(body)
                    });
                }
            });
        })
    })
}
router.get('/qrcode', async (ctx, next) => {
    await getQrcode().then(res=>{
        ctx.body={
            code:200,
            message:'请求成功',
            data:res
        }
    })
})
router.post('/jsList', async (ctx, next) => {
    var form = new formidable.IncomingForm();  
    form.encoding = 'utf-8';  
    form.uploadDir = path.join(__dirname,'../excel');  
    form.keepExtensions = true;//保留后缀  
    form.maxFieldsSize = 2*1024*1024;  
    // var hasDir=fs.accessSync(path.join(__dirname,'../excel'));
    var hasDir=true
    try {
        fs.accessSync(path.join(__dirname,'../excel'))
        console.log('可以读写');
    } catch (err) {
        hasDir=false
    }
    console.log(hasDir)
    if(!hasDir){
        fs.mkdirSync(path.join(__dirname,'../excel'))
    }
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
            // =========
            // 江苏桌贴
            // for(var s=1,len=firstSheet.length;s<len;s++){
            //     // 江苏报名
            //     var cur=firstSheet[s]
            //     if(cur[0]){
            //         vals.push({
            //             stuName:cur[0],
            //             schoolName:cur[1],
            //             ticketNo:cur[2],
            //             color:cur[3],
            //         })
            //     }
            // }
            // ==========
            // 山东准考证
            // for(var s=1,len=firstSheet.length;s<len;s++){
            //     var cur=firstSheet[s]
            //     if(cur[0]){
            //         vals.push({
            //             studentName:cur[0],
            //             appId:cur[1],
            //             areaName:cur[4],
            //             ticketNo:cur[3],
            //             examName:cur[2],
            //             provinceName:'山东',
            //             examTime:'2019-10-26 12:12:12',
            //             seatNo:cur[7],
            //             idNo:cur[1],
            //             roomName:`第${cur[6]}考场`,
            //         })
            //     }
            // }
            // =====
            // 山东桌贴50个/考场
            for(var ss=1;ss<189;ss++){
                var ticketList=[]
                var cur
                var roomName
                for(var s=1,len=firstSheet.length;s<len;s++){
                    cur=firstSheet[s]
                    if(cur[6]==ss){
                        roomName= `第${cur[6]}考场`
                        ticketList.push({
                            "agentCode":cur[5],
                            "agentName":cur[4],
                            "areaName":cur[4],
                            "idNo":cur[1],
                            "seatNo":cur[7],
                            "studentName":cur[0],
                            "roomName":`第${cur[6]}考场`,
                            "ticketNo":cur[3]
                        })
                    }
                }
                vals.push({
                    arrangeId:cur[6],
                    roomName:roomName,
                    ticketList:ticketList,
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
