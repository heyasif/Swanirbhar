const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send({ message: "No token provided!" });
    }

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: "Unauthorized!" });
        }
        req.userId = decoded.id;
        next();
    });
};

const isTeacher = (req, res, next) => {
    if (req.role !== 'teacher') {
        return res.status(403).send({ message: "Require Teacher Role!" });
    }
    next();
};

module.exports = { verifyToken, isTeacher };
