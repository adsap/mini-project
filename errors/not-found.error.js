const HttpError = require('./http.error');

class NotFoundError extends HttpError {
  constructor(message = 'Not Found') {
    super(404, message);
  }
}

module.exports = NotFoundError;
