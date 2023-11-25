const URL = require("../models/url")

async function redirectRoute(req,res){
    const shortId = req.params.shortId
    const entry = await URL.findOneAndUpdate(
        {
            shortId,
        },{
            $push : {
                visitHistory : {
                    timestamp : Date.now()
                }
            }
        }
        
    )
    res.send(entry.redirectUrl)
}


module.exports = {redirectRoute}

