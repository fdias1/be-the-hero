const connection = require('../database/connection.js')


module.exports = {
    create: async (req,res) => {
        const id = req.body.id
        const ong = await connection('ongs').where('id',id).select('name').first()

        if (!ong) return res.status(400).json({ error: 'There is no ONG with this ID' })

        return res.json(ong)
    }

}