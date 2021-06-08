function validateDisplayName(req, res, next) {
  const { displayName } = req.body;
  if (displayName.length < 8) {
    return res.status(400).json({ message: '"displayName" length must be at least 8 characters long' });
  }
  next();
}

function validateEmail(req, res, next) {
  const { email } = req.body;
  const emailRegex = /(([^<>()[\]\\.!*|?/,;:\s@"]+(\.[^<>()[\]\\.!*|?/,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))/;
  const isEmailAValidRegex = emailRegex.test(email);

  if (email === '') {
    return res.status(400).json({ message: '"email" is not allowed to be empty' });
  }
  if (!email) {
    return res.status(400).json({ message: '"email" is required' });
  }
  if (!isEmailAValidRegex) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  next();
}

function validatePassword(req, res, next) {
  const { password } = req.body;
  if (password === '') {
    return res.status(400).json({ message: '"password" is not allowed to be empty' });
  }
  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }
  if (password.length < 6) {
    return res.status(400).json({ message: '"password" length must be 6 characters long' });
  }
  next();
}

module.exports = {
  validateDisplayName,
  validateEmail,
  validatePassword,
};
