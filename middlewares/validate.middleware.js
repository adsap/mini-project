const validateBody = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    return res.status(400).json({
      status: 'error body validation',
      message: error.details.map((err) => err.message),
    });
  }
  next();
};

const validateQuery = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.query, {
    abortEarly: false,
  });

  if (error) {
    return res.status(400).json({
      status: 'error query validation',
      message: error.details.map((err) => err.message),
    });
  }
  next();
};

module.exports = { validateBody, validateQuery };
