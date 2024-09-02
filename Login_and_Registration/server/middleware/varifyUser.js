import jwt from 'jsonwebtoken';

const varifyUser = async(req, res, next) =>{
    try {
        const token = req.cookie.token;
        if(!token){
            return res.json("Token is missing")
        }else{
            jwt.verify(token, "jwt-secret-key", async(err, decoded) =>{
                if(err){
                    return res.json("Error with token");
                }else{
                    if(decoded.role === "admin"){
                        next();
                    }else{
                        return res.json("not admin");
                    }
                }
            })
        }

    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

export {varifyUser};