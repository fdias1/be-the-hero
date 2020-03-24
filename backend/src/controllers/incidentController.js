const connection = require('../database/connection.js')

module.exports = {
    create: async (req,res) => {
        const { title, description, value } = req.body
        const ong_id = req.headers.authorization

        const result = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        })
        const id = result[0]

        return res.json({ id })
    },

    index: async (req,res) => {
        const incidents = await connection('incidents').select('*')
        return res.json(incidents)
    },

    delete: async (req,res) => {

        const id = req.params.id
        const ong_id = req.headers.authorization

        const incident = await connection('incidents').where('id',id).select('ong_id').first()
        console.log(incident)
        console.log(ong_id)
        if(incident.ong_id != ong_id) {
            return res.status(401).json({ error: 'operation not permited!'})
        }

        await connection('incidents').where('id',id).delete()
        return res.status(204).send()
    }
}
