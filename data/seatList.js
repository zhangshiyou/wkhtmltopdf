var list=[]
var JsBarcode = require('jsbarcode');
const { DOMImplementation, XMLSerializer } = require('xmldom');
const xmlSerializer = new XMLSerializer();
const document = new DOMImplementation().createDocument('http://www.w3.org/1999/xhtml', 'html', null);
const svgNode = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
// 从data开始取数据
let d=[{"arrangeId":187,"roomName":"第21考场","ticketList":[{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"500235199312208178","seatNo":1,"studentName":"张石友","ticketNo":"0040040491"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"265417854758555441","seatNo":2,"studentName":"哈哈","ticketNo":"0040040490"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"255111111111111111","seatNo":3,"studentName":"哦们","ticketNo":"0040040489"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"500235199312208178","seatNo":1,"studentName":"张石友","ticketNo":"0040040491"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"265417854758555441","seatNo":2,"studentName":"哈哈","ticketNo":"0040040490"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"255111111111111111","seatNo":3,"studentName":"哦们","ticketNo":"0040040489"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"500235199312208178","seatNo":1,"studentName":"张石友","ticketNo":"0040040491"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"265417854758555441","seatNo":2,"studentName":"哈哈","ticketNo":"0040040490"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"255111111111111111","seatNo":3,"studentName":"哦们","ticketNo":"0040040489"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"500235199312208178","seatNo":1,"studentName":"张石友","ticketNo":"0040040491"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"265417854758555441","seatNo":2,"studentName":"哈哈","ticketNo":"0040040490"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"255111111111111111","seatNo":3,"studentName":"哦们","ticketNo":"0040040489"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"500235199312208178","seatNo":1,"studentName":"张石友","ticketNo":"0040040491"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"265417854758555441","seatNo":2,"studentName":"哈哈","ticketNo":"0040040490"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"255111111111111111","seatNo":3,"studentName":"哦们","ticketNo":"0040040489"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"500235199312208178","seatNo":1,"studentName":"张石友","ticketNo":"0040040491"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"265417854758555441","seatNo":2,"studentName":"哈哈","ticketNo":"0040040490"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"255111111111111111","seatNo":3,"studentName":"哦们","ticketNo":"0040040489"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"500235199312208178","seatNo":1,"studentName":"张石友","ticketNo":"0040040491"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"265417854758555441","seatNo":2,"studentName":"哈哈","ticketNo":"0040040490"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"255111111111111111","seatNo":3,"studentName":"哦们","ticketNo":"0040040489"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"500235199312208178","seatNo":1,"studentName":"张石友","ticketNo":"0040040491"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"265417854758555441","seatNo":2,"studentName":"哈哈","ticketNo":"0040040490"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"255111111111111111","seatNo":3,"studentName":"哦们","ticketNo":"0040040489"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"500235199312208178","seatNo":1,"studentName":"张石友","ticketNo":"0040040491"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"265417854758555441","seatNo":2,"studentName":"哈哈","ticketNo":"0040040490"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"255111111111111111","seatNo":3,"studentName":"哦们","ticketNo":"0040040489"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"500235199312208178","seatNo":1,"studentName":"张石友","ticketNo":"0040040491"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"265417854758555441","seatNo":2,"studentName":"哈哈","ticketNo":"0040040490"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"255111111111111111","seatNo":3,"studentName":"哦们","ticketNo":"0040040489"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"500235199312208178","seatNo":1,"studentName":"张石友","ticketNo":"0040040491"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"265417854758555441","seatNo":2,"studentName":"哈哈","ticketNo":"0040040490"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"255111111111111111","seatNo":3,"studentName":"哦们","ticketNo":"0040040489"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"500235199312208178","seatNo":1,"studentName":"张石友","ticketNo":"0040040491"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"265417854758555441","seatNo":2,"studentName":"哈哈","ticketNo":"0040040490"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"255111111111111111","seatNo":3,"studentName":"哦们","ticketNo":"0040040489"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"500235199312208178","seatNo":1,"studentName":"张石友","ticketNo":"0040040491"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"265417854758555441","seatNo":2,"studentName":"哈哈","ticketNo":"0040040490"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"255111111111111111","seatNo":3,"studentName":"哦们","ticketNo":"0040040489"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"500235199312208178","seatNo":1,"studentName":"张石友","ticketNo":"0040040491"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"265417854758555441","seatNo":2,"studentName":"哈哈","ticketNo":"0040040490"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"255111111111111111","seatNo":3,"studentName":"哦们","ticketNo":"0040040489"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"500235199312208178","seatNo":1,"studentName":"张石友","ticketNo":"0040040491"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"265417854758555441","seatNo":2,"studentName":"哈哈","ticketNo":"0040040490"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"255111111111111111","seatNo":3,"studentName":"哦们","ticketNo":"0040040489"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"500235199312208178","seatNo":1,"studentName":"张石友","ticketNo":"0040040491"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"265417854758555441","seatNo":2,"studentName":"哈哈","ticketNo":"0040040490"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"255111111111111111","seatNo":3,"studentName":"哦们","ticketNo":"0040040489"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"500235199312208178","seatNo":1,"studentName":"张石友","ticketNo":"0040040491"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"265417854758555441","seatNo":2,"studentName":"哈哈","ticketNo":"0040040490"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"255111111111111111","seatNo":3,"studentName":"哦们","ticketNo":"0040040489"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"500235199312208178","seatNo":1,"studentName":"张石友","ticketNo":"0040040491"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"265417854758555441","seatNo":2,"studentName":"哈哈","ticketNo":"0040040490"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"255111111111111111","seatNo":3,"studentName":"哦们","ticketNo":"0040040489"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"500235199312208178","seatNo":1,"studentName":"张石友","ticketNo":"0040040491"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"265417854758555441","seatNo":2,"studentName":"哈哈","ticketNo":"0040040490"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"255111111111111111","seatNo":3,"studentName":"哦们","ticketNo":"0040040489"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"500235199312208178","seatNo":1,"studentName":"张石友","ticketNo":"0040040491"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"265417854758555441","seatNo":2,"studentName":"哈哈","ticketNo":"0040040490"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"255111111111111111","seatNo":3,"studentName":"哦们","ticketNo":"0040040489"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"500235199312208178","seatNo":1,"studentName":"张石友","ticketNo":"0040040491"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"265417854758555441","seatNo":2,"studentName":"哈哈","ticketNo":"0040040490"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"255111111111111111","seatNo":3,"studentName":"哦们","ticketNo":"0040040489"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"500235199312208178","seatNo":1,"studentName":"张石友","ticketNo":"0040040491"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"265417854758555441","seatNo":2,"studentName":"哈哈","ticketNo":"0040040490"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"255111111111111111","seatNo":3,"studentName":"哦们","ticketNo":"0040040489"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"500235199312208178","seatNo":1,"studentName":"张石友","ticketNo":"0040040491"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"265417854758555441","seatNo":2,"studentName":"哈哈","ticketNo":"0040040490"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"255111111111111111","seatNo":3,"studentName":"哦们","ticketNo":"0040040489"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"500235199312208178","seatNo":1,"studentName":"张石友","ticketNo":"0040040491"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"265417854758555441","seatNo":2,"studentName":"哈哈","ticketNo":"0040040490"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"255111111111111111","seatNo":3,"studentName":"哦们","ticketNo":"0040040489"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"500235199312208178","seatNo":1,"studentName":"张石友","ticketNo":"0040040491"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"265417854758555441","seatNo":2,"studentName":"哈哈","ticketNo":"0040040490"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"255111111111111111","seatNo":3,"studentName":"哦们","ticketNo":"0040040489"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"500235199312208178","seatNo":1,"studentName":"张石友","ticketNo":"0040040491"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"265417854758555441","seatNo":2,"studentName":"哈哈","ticketNo":"0040040490"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"255111111111111111","seatNo":3,"studentName":"哦们","ticketNo":"0040040489"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"500235199312208178","seatNo":1,"studentName":"张石友","ticketNo":"0040040491"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"265417854758555441","seatNo":2,"studentName":"哈哈","ticketNo":"0040040490"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"255111111111111111","seatNo":3,"studentName":"哦们","ticketNo":"0040040489"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"500235199312208178","seatNo":1,"studentName":"张石友","ticketNo":"0040040491"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"265417854758555441","seatNo":2,"studentName":"哈哈","ticketNo":"0040040490"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"255111111111111111","seatNo":3,"studentName":"哦们","ticketNo":"0040040489"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"500235199312208178","seatNo":1,"studentName":"张石友","ticketNo":"0040040491"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"265417854758555441","seatNo":2,"studentName":"哈哈","ticketNo":"0040040490"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"255111111111111111","seatNo":3,"studentName":"哦们","ticketNo":"0040040489"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"500235199312208178","seatNo":1,"studentName":"张石友","ticketNo":"0040040491"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"265417854758555441","seatNo":2,"studentName":"哈哈","ticketNo":"0040040490"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"255111111111111111","seatNo":3,"studentName":"哦们","ticketNo":"0040040489"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"500235199312208178","seatNo":1,"studentName":"张石友","ticketNo":"0040040491"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"265417854758555441","seatNo":2,"studentName":"哈哈","ticketNo":"0040040490"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"255111111111111111","seatNo":3,"studentName":"哦们","ticketNo":"0040040489"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"500235199312208178","seatNo":1,"studentName":"张石友","ticketNo":"0040040491"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"265417854758555441","seatNo":2,"studentName":"哈哈","ticketNo":"0040040490"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"255111111111111111","seatNo":3,"studentName":"哦们","ticketNo":"0040040489"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"500235199312208178","seatNo":1,"studentName":"张石友","ticketNo":"0040040491"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"265417854758555441","seatNo":2,"studentName":"哈哈","ticketNo":"0040040490"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"255111111111111111","seatNo":3,"studentName":"哦们","ticketNo":"0040040489"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"500235199312208178","seatNo":1,"studentName":"张石友","ticketNo":"0040040491"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"265417854758555441","seatNo":2,"studentName":"哈哈","ticketNo":"0040040490"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"255111111111111111","seatNo":3,"studentName":"哦们","ticketNo":"0040040489"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"500235199312208178","seatNo":1,"studentName":"张石友","ticketNo":"0040040491"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"265417854758555441","seatNo":2,"studentName":"哈哈","ticketNo":"0040040490"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"255111111111111111","seatNo":3,"studentName":"哦们","ticketNo":"0040040489"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"500235199312208178","seatNo":1,"studentName":"张石友","ticketNo":"0040040491"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"265417854758555441","seatNo":2,"studentName":"哈哈","ticketNo":"0040040490"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"255111111111111111","seatNo":3,"studentName":"哦们","ticketNo":"0040040489"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"500235199312208178","seatNo":1,"studentName":"张石友","ticketNo":"0040040491"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"265417854758555441","seatNo":2,"studentName":"哈哈","ticketNo":"0040040490"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"255111111111111111","seatNo":3,"studentName":"哦们","ticketNo":"0040040489"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"500235199312208178","seatNo":1,"studentName":"张石友","ticketNo":"0040040491"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"265417854758555441","seatNo":2,"studentName":"哈哈","ticketNo":"0040040490"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"255111111111111111","seatNo":3,"studentName":"哦们","ticketNo":"0040040489"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"500235199312208178","seatNo":1,"studentName":"张石友","ticketNo":"0040040491"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"265417854758555441","seatNo":2,"studentName":"哈哈","ticketNo":"0040040490"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"255111111111111111","seatNo":3,"studentName":"哦们","ticketNo":"0040040489"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"500235199312208178","seatNo":1,"studentName":"张石友","ticketNo":"0040040491"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"265417854758555441","seatNo":2,"studentName":"哈哈","ticketNo":"0040040490"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"255111111111111111","seatNo":3,"studentName":"哦们","ticketNo":"0040040489"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"500235199312208178","seatNo":1,"studentName":"张石友","ticketNo":"0040040491"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"265417854758555441","seatNo":2,"studentName":"哈哈","ticketNo":"0040040490"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"255111111111111111","seatNo":3,"studentName":"哦们","ticketNo":"0040040489"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"500235199312208178","seatNo":1,"studentName":"张石友","ticketNo":"0040040491"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"265417854758555441","seatNo":2,"studentName":"哈哈","ticketNo":"0040040490"},{"agentCode":"004","agentName":"四号画室","areaName":"菏泽考区","idNo":"255111111111111111","seatNo":3,"studentName":"哦们","ticketNo":"0040040489"}]}]
// for(let s=0;s<1500;s++){
//     list.push(d)
// }
list=d
list.forEach((item,index)=>{
    item.ticketList.forEach((sun,subi)=>{
        JsBarcode(svgNode, sun.ticketNo, {
            xmlDocument: document,
            height: 55
        });
        const svgText = xmlSerializer.serializeToString(svgNode);
        sun['svgNode']=svgText
    })
})
module.exports =list
