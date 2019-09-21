let dateFun={}
dateFun.getYear=function(datetime){
    if (datetime != null) {
        const dateMat = new Date(datetime)
        const year = dateMat.getFullYear()
        return year
    }
}
module.exports=dateFun