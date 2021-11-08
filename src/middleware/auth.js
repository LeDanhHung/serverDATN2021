import jwt from 'jwt';
import User from '../auth/user.models.js';

const verifyToken = async (req,res,next) => {
    const Bearer = req.body.token || req.params.token || req.header("Authorization");
    if(!Bearer){
        return res.status(403).send("A token is required for authentication");
    }
    let token = Bearer.split(" ")[1];
    try {
        const decoded = await jwt.verify(token,'project',{algorithm: 'HS256'});
        const user_abc = await User.findOne({where: {fullName: decoded.fullName}})
        req.user = user_abc.id;
    } catch (error) {
        console.log(error)
        return res.status(401).send("Invalid token");
    }
    return next();
}

export {verifyToken}