const router = require('koa-router')()
var fs = require("fs")
var path=require('path')


// import list from '../public/javascripts/list'
let stuList=require('../data/stuList')
let seatList=require('../data/seatList')
router.get('/', async (ctx, next) => {
    var wkhtmltopdf = require('wkhtmltopdf');
    // URL
    var names='座位号.pdf'
    var names1='准考证号.pdf'
    wkhtmltopdf('http://localhost:3100/no/', { 
        pageSize: 'letter' 
    }).pipe(fs.createWriteStream(`${path.resolve(__dirname,'../public/pdf')}/${names}`));
    wkhtmltopdf('http://localhost:3100/identity/', { 
        pageSize: 'letter' 
    }).pipe(fs.createWriteStream(`${path.resolve(__dirname,'../public/pdf')}/${names1}`));
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

router.get('/string', async (ctx, next) => {
    ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
    ctx.body = {
        title: 'koa2 json'
    }
})

module.exports = router
