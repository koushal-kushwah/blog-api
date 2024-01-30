// const jwt = require('jsonwebtoken');

// const genrateToken = id => {
//   return jwt.sign({id}, process.env.JWT_KEY,
//   {expiresIn : "1h"})
// };

// module.exports = genrateToken;


// newCode 
const jwt = require('jsonwebtoken');

const generateToken = id => {
  const payload = { id };
  const token = jwt.sign(payload, process.env.JWT_KEY, { expiresIn: '1h' });
  return token;
};

module.exports = generateToken;
