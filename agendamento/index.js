const app = require('../agendamento/app/config/serve');
const routes = require('../agendamento/app/routes/routes');

routes.home(app);
routes.estetica(app);
routes.agendamento(app);
routes.listarAgendamentos(app);
routes.excluirAgendamento(app);
