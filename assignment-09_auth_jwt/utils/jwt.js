const jwt = require("jsonwebtoken");
const SECRET = "MY-JWT-SECRET";
// make sure to use .env file to store secret in actual projects

const generateJwt = (payload) => {
  const token = jwt.sign(payload, SECRET, {
    expiresIn: "1h",
  });
  return token;
};

const verifyJwt = (token) => {
  try {
    const decoded = jwt.verify(token, SECRET);
    return decoded;
  } catch (err) {
    return null;
  }
};

module.exports = { generateJwt, verifyJwt };
