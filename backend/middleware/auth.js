const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  // Check if Authorization header exists
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      error: 'Authorization token missing.'
    });
  }

  // Extract token
  const token = authHeader.split(' ')[1];

  try {
    // Verify JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Make decoded user available to the next handler
    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      error: 'Invalid or expired token.'
    });
  }
}

module.exports = authMiddleware;