const jwt = require('jsonwebtoken')
const asyncHandler= require('express-async-handler')
const User = require('../model/userCredentialModel')

const protect = asyncHandler(async (req, res, next) => {
  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1]
      console.log('kuio',token);

      // Verify token
      const decoded = jwt.verify(token, process.env.jwt_secret)

      // Get user from the token
      req.userId= await User.findById(decoded.id).select('-password')

      next()
    } catch (error) {
      console.log(error)
      res.status(401)
      throw new Error('Not authorized')
    }
  }

  if (!token) {
    res.status(401)
    throw new Error('Not authorized, no token')
  }
})

module.exports = { protect }