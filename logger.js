const logger = (req, res, next)=>{
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    const hour = new Date().getHours()
    console.log(method, url, time, hour);
    next()
}
module.exports = logger