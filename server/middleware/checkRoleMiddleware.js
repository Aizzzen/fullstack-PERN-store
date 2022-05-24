const jwt = require("jsonwebtoken");

// проверка роли - администратор
module.exports = function(role) {
    return function (req, res, next) {
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
            if(decoded.role !== role) {
                return res.status(403).json({message: "Нет доступа"})
            }
            req.user = decoded
            next()
        } catch(e) {
            res.status(401).json({message: "Не авторизован"})
        }
    }
}
