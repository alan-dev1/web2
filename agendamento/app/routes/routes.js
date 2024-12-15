const express = require('express');
const { home } = require("../controllers/home");
const agendamentoController = require('../controllers/agendamento');

module.exports = {
    home: (app) => {
        app.get("/", function(req, res) {
            res.render("home.ejs");
        });
    },
    estetica: (app) => {
        app.get("/estetica", function(req, res) {
            res.render("estetica.ejs");
        });
    },
    agendamento: (app) => {
        app.post("/processar_atendimento", express.urlencoded({ extended: true }), agendamentoController.processarAgendamento);
    },
    listarAgendamentos: (app) => {
        app.get("/listar_agendamentos", agendamentoController.listarAgendamentos);
    },
    excluirAgendamento: (app) => {
        app.post("/excluir_agendamento/:id", agendamentoController.excluirAgendamento);
    },
};