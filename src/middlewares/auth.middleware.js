const jwt=require('jsonwebtoken');

async function authArtist(req,res,next){
    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({message:"Unauthorized"})
    }

    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        
        if (decoded.role !== "artist"){
            return res.status(403).json({message:"You dont have access to create album"})
        }

        req.user = decoded;//created new request property

        next();



    } catch (error) {
        console.log(error);
        return res.status(401).json({message:"Unauthorized"})
        
    }

}

async function authUser(req,res,next){
    const token = req.cookies.token;

    if(!token){
        res.status(401).json({
            message:"Unauthorized"
        })
    };

    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET)

        if (decoded.role !== "user" && decoded.role !== "artist"){
            return res.status(403).json({message:"You don't have access"})
        }

        req.use=decoded;

    } catch (error) {
        console.log(error)
        return res.status(401).json({message:"Unauthorized"})
        
    }


}

module.exports = {authArtist,authUser}