// npn i node-schedule@1.3.0 -E       # node para agendar tarefas

const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('/5 * * * * *', function() {
    console.log('Executando Tarefa1!', new Date().getSeconds())
})

setTimeout(function() {
    tarefa1.cancel()
    console.log('Cancelando Tarefa1!')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 12
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Executando Tarefa2!', new Date().getSeconds())
})