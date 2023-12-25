
// Middleware function to log request details
const middleware = async function (req, res, next) {
    const timestamp = new Date().toISOString();
    const method = req.method;
    const url = req.url;
  
    // Log request details to the console
    console.log(`[${timestamp}] ${method} ${url}`);
  
    // Pass control to the next middleware in the stack
    next();
  };

  module.exports={middleware}