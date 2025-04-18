export const inputMiddleware = (req, res, next) => {
    if(req.body){
        if(req.body.name && req.files) return next()
    }
    return res.status(401).redirect('/pdf-app');
};