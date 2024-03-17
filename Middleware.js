
const Middleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;
  
    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.split(' ')[1];
  
      try {
        const decodedToken = jwt.verify(token, 'Dibakar');
        req.userId = decodedToken.userId; 
        next(); 
      } catch (error) {
        throw new Error('Authentication failed');
      }
    } else {
      throw new Error('Authentication token missing');
    }
  };
  
  
  module.exports = Middleware;