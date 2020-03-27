const connection = require('../database/connection.js')

module.exports = {
    index: async (req,res) => {

        const { page =1 } = req.query


        const ong_id = req.headers.authorization
        const ongs = await connection('incidents').where('ong_id', ong_id)
        .join('ongs','ongs.id','=','incidents.ong_id')
        .select(['incidents.*','ongs.name','ongs.email','ongs.whatsapp','ongs.city','ongs.uf'] )
        
        const [count] = await connection('incidents').where('ong_id', ong_id).count()
        res.header('X-total-count', count['count(*)'])

        return res.json(ongs)
    }
}