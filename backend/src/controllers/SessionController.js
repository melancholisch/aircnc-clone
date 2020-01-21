// index, show, store, update, destroy
// listagem de sessões, uma única sessão, criar uma sessão, alterar uma sessão e deletar
const User = require('../models/User')

module.exports = {
    async store(req, res){
        const { email } = req.body;
        let user = await User.findOne({email});
        if (!user){
            let user = await User.create({email});
        }

        return res.json(user);
    }
};