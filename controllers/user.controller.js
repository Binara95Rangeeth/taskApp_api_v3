const model = require('../models');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const validator = require("fastest-validator");

const v = new validator()

module.exports = {
    signUp,
    login,
    getAllUserName
}

function signUp(req, res) {
    const newUser = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }
    // console.log(newUser)
    const userSchema = {
        username: {type:"string",optional:false},
        email: {type:"email",optional:false},
        password: {type:"string",optional:false}
    }
    const validRes = v.validate(newUser,userSchema)
    // console.log(validRes)
    if (validRes !== true) {
        return res.status(400).json({
        message: "Validation faild",
        error: validRes,
    });
    } else {
        model.User.findOne({ where: { username:newUser.username } })
            .then((result) => {
                if (result) {
                    res.status(409).json({
                        message: "username already exist",
                    });
                } else {
                    bcrypt.genSalt(2, (err, salt) => {
                        if (err) {
                            return res.status(500).json({
                                message: "Something wrong with genSalt",
                                err
                            })
                        }
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            if (err) {
                                return res.status(500).json({
                                    message: "Something went wrong from hashing",
                                    err,
                                });
                            }
                            const validUser = {
                                username: newUser.username,
                                email: newUser.email,
                                hashedPWD: hash
                            }
                            model.User.create(validUser).then(result => {
                                return res.status(201).json({
                                    message: "User created",
                                    user: result
                                })
                            }).catch(error => {
                                return res.status(500).json({
                                    message: "User not created",
                                    error
                                })
                            })
                        })
                    })
                }
            })
            .catch(error => {
                return res.status(500).json({
                    message: "Something went wrong",
                    error,
                });
             })
        
    }

}

function login(req, res) {
    const logininUser = {
        username: req.body.username,
        password: req.body.password
    }
    const userSchema = {
        username: {type:"string",optional:false},
        password: {type:"string",optional:false}
    }
    const validRes = v.validate(logininUser,userSchema)
    if (validRes !== true) {
        return res.status(400).json({
            message: "Validation faild",
            error: validRes,
        });
    } else {
        model.User.findOne({ where: { username: logininUser.username } })
            .then(user => {
                console.log(user)
                if (user === null) {
                    return res.status(409).json({
                        message: "Invalid Credentials"
                    });
                } else {
                    bcrypt.compare(logininUser.password, user.hashedPWD, (error, result) => {
                        if (error) {
                            return res.status(500).json({
                                    message: "Something went wrong from bcrypt comparing",
                                    error,
                                });
                        }
                        if (result) {
                            jwt.sign({
                                username: user.username,
                                userId: user.id
                            },
                            process.env.ACCESS_TOKEN_SECRET,
                            (err, token) => {
                                if (err) {
                                    return res.status(500).json({
                                    message: "Something went wrong from token generation",
                                    err,
                                });
                                } else {
                                    return res.status(200).json({
                                        message: "Authentication successful",
                                        token,
                                    });
                                }
                            })
                        }
                    })
                }
            })
            .catch(error => {
                return res.status(500).json({
                    message: "Something went wrong",
                    error,
                });
            })
    }
        
    

}

function getAllUserName(req, res){
    model.User.findAll({
        attributes:['username']
    })
        .then(result => {
            var userList = []
            result.forEach(e => {
                userList.push(e.username);
            })
            return res.status(200).json( {userListLength:userList.length,userList});
        })
        .catch(error => {
            return res.status(500).json({
                message: "Something went wrong",
                error
        });
        })
}

