const agendamentoModel = require('../model/agendamento');

module.exports = {
    processarAgendamento: async (req, res) => {
        const { cliente_nome, cpf_cliente, data_atendimento } = req.body;

        if (!cliente_nome || !cpf_cliente || !data_atendimento) {
            return res.status(400).send('Todos os campos são obrigatórios!');
        }

        try {
            await agendamentoModel.createAgendamento(cliente_nome, cpf_cliente, data_atendimento);
            res.status(201).send('Agendamento cadastrado com sucesso!');
        } catch (error) {
            res.status(500).send('Erro ao processar o agendamento.');
        }
    },

    listarAgendamentos: async (req, res) => {
        try {
            const agendamentos = await agendamentoModel.getAllAgendamentos();
            res.render('listar_agendamentos.ejs', { agendamentos });
        } catch (error) {
            res.status(500).send('Erro ao listar os agendamentos.');
        }
    },

    excluirAgendamento: async (req, res) => {
        const { id } = req.params;

        try {
            await agendamentoModel.deleteAgendamento(id);
            res.redirect('/listar_agendamentos');
        } catch (error) {
            res.status(500).send('Erro ao excluir o agendamento.');
        }
    },
};