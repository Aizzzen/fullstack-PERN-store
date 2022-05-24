const jwt = require("jsonwebtoken")

module.exports = function (req, res, next) {
    if(req.method === "OPTIONS") {
        next()
    }
    try {
        // выцепляю токен для проверки
        // в объект сначала помещают тип токена, а потом сам токен
        // поэтому сепарирую по пробелу
        const token = req.headers.authorization.split(' ')[1] // Bearer whgeilupwegwh
        if(!token) {
            return res.status(401).json({message: "Не авторизован"})
        }
        // проверка токена на валидность
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        req.user = decoded
        next()
    } catch(e) {
        res.status(401).json({message: "Не авторизован"})
    }
}
