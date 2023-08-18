function log(req,res,next) {
    console.log("Middleware fr log.....");
    next()
}

module.exports = log