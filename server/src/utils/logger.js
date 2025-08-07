export const log = (message) => {
  console.log(`[LOG]: ${message}`);
};
export const logError = (error) => {
  console.error(`[ERROR]: ${error.message || error}`);
};
const logger = (req, res, next) => {
  console.log(`[${req.method}] ${req.originalUrl}`);
  next();
};
export default logger;
