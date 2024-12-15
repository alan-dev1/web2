const dbConn = require('../config/dbConnection');

module.exports = {
    createAgendamento: (nome, cpf, data, callback) => {
        const query = 'INSERT INTO agendamentos (cliente_nome, cpf_cliente, data_atendimento) VALUES (?, ?, ?)';
        dbConn.query(query, [nome, cpf, data], callback);
    },

    getAllAgendamentos: () => {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM agendamentos';
            dbConn.query(query, (err, results) => {
                if (err) return reject(err);
                resolve(results);
            });
        });
    },

    deleteAgendamento: (id) => {
        return new Promise((resolve, reject) => {
            const query = 'DELETE FROM agendamentos WHERE id = ?';
            dbConn.query(query, [id], (err, result) => {
                if (err) return reject(err);
                resolve(result);
            });
        });
    },
};
