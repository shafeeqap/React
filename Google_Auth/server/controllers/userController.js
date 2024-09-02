const passport = require("passport");

const loginSuccess = (req, res) => {
  if (req.user) {
    res.status(200).json({
      error: false,
      message: "Successfully Loged In",
      user: req.user,
    });
  } else {
    res.status(403).json({ error: true, message: "Not Authorized" });
  }
};

const loginFailed = (req, res) => {
  res.status(401).json({
    error: true,
    message: "Log in failure",
  });
};

const logout = (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ error: "Failed to log out" });
    }
    
    req.session.destroy((err) => {
      if (err) {
        console.log("Failed to destroy session", err);
      } else {
        console.log("Session destroyed successfully");
      }
      res.clearCookie("connect.sid", { 
        path: "/",
        // secure: process.env.NODE_ENV === 'production',
        // sameSite: 'none'
    });
      res.redirect(process.env.CLIENT_URL);
    });
  });
};

module.exports = { loginSuccess, loginFailed, logout };
