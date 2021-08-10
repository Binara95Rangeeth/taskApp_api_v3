const jwt = require("jsonwebtoken");

function checkAuth(req, res, next) {
  try {
    const authHeader = req.headers["authorization"];
    // console.log(authHeader);
    const token = authHeader && authHeader.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.userData = decodedToken;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token", error });
  }
}

module.exports = { checkAuth };
