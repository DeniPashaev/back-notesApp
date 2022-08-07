const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const {secret} = require("../config")

const generateAccessToken = (id) => {
    const payload = {
        id
    }
    return jwt.sign(payload, secret, {expiresIn: "24h"})
}

class authController {
    async registration(req, res) {
        try {
            const errors = validationResult(req)
            
            if (!errors.isEmpty()) {
                return res.status(400).json({message: "Ошибка при регистрации", errors})
            }

            const {username, password} = req.body
            const candidate = await User.findOne({username})
            if (candidate) {
               return res.status(400).json({message: "Пользователь с таким именем уже существует!"}) 
            }
            const hashPassword = bcrypt.hashSync(password, 7);

            const user = new User({username, password: hashPassword});

            await user.save();

            return res.json({message: "Пользователь был успешно зарегистрирован!"})

        } catch (e) {
            console.log(e)
            res.status(400).json({message: "Registration error"})
        }
    }

    async login(req, res) {
        try {
            const {username, password} = req.body;
            const user = await User.findOne({username})
            if(!user){
                return res.status(400).json({message: `Пользователь ${username} не найден`})
            }
            const validPassword = bcrypt.compareSync(password, user.password)
            if(!validPassword){
                return res.status(400).json({message: "Введен неверный пароль"})
            }
            const token = generateAccessToken(user._id)
            return res.json({token})
        } catch (e) {
            console.log(e)
            res.status(400).json({message: "Login error"})
        }
    }

    async getUsers(req, res) {
        try {
            const users = await User.find()
            res.json(users)
        } catch (error) {
            
        }
    }
    async getUsersById(req, res) {
        try {
            const {id} = req.params
            const user = await User.findById(id);
            res.json(user)
        } catch (e) {
            res.status(400).json({message: "Ошибка при получении определенного пользователя"})
        }
    }
}

module.exports = new authController()