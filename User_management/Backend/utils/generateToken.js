import jwt from "jsonwebtoken";

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '30d'
  });

  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
    sameSite: 'strict', // helps reduce cross-site request forgery (CSRF)
    maxAge: 30 * 24 * 60 * 60 * 1000,  // sets the cookie's expiration time to 30 days (in milliseconds).
  });
};

export default generateToken;
