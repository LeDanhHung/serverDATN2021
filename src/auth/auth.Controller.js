const User = require('./user.models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

exports.register = async (req, res, next) => {
    try {
        const user = await User.create(req.body);
        res.status(200).json({
            status: 'register success',
            result: user
        })
    } catch (error) {
        console.log(error);

    }
}
exports.login = async (req, res, next) => {
    try {
        const email = req.body.email;
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            res.status(400).json({
                status: 'not found',
                message: 'email is not correct',
            })
        } else {
            let check = await bcrypt.compareSync(req.body.passWord, user.passWord);
            if (user.email === email && check == true) {
                const token = jwt.sign({ userId: user._id }, 'project', { algorithm: 'HS256' });
                res.status(200).json({
                    status: 'login success',
                    data: {
                        token, userName: user.name,
                    }
                })
            } else {
                res.status(400).json({
                    status: false,
                    message: 'password do not exist',
                })
            }
        }
    } catch (error) {
        console.log(error);
    }
}
exports.getListUser = async (req, res, next) => {
    try {
        const user = await User.find({});
        res.status(200).json({
            status: 'get list user success',
            result: user.length,
            data: { user }
        })
    } catch (error) {
        console.log(error);
    }
}
exports.getListUserId = async (req, res, next) => {
    const id = req.params.id;
    try {
        const user = await User.findOne({ _id: id  });
        res.status(200).json({
            status: 'get list user + id success',
            data: { user }
        })
    } catch (error) {
        console.log(error);
    }
}
exports.UpdateOneUser = async (req, res, next) => {
    try {
        if (!req.body) {
            return res.status(400).send({
                message: 'data to update can not be empty!'
            })
        }
        const id = req.params.id;
        const userDB = await User.findOne({ _id: id });
        if (!userDB) {
            res.status(404).send({ message: 'User not found' });
        }
        const userDB2 = await User.findByIdAndUpdate(id, { $set: req.body }, { new: true });
        await userDB2.save();
        return res.status(200).send({
            message: 'update user successfully',
            data: userDB2
        })
    } catch (error) {
        res.status(500).send(error);
    }
}
exports.DelateOneUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id, req.body);
        if (!user) {
            res.status(404).send(" No item");
        }
        res.status(200).send("delete user successfully");
    } catch (error) {
        res.status(500).send(error);
    }
}