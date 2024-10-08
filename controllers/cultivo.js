const db = require('../database/connection'); 

module.exports = {
    async listarCultivo(request, response) {
        try {            
            const sql = `SELECT Cult_Id, Cult_Nome, Cult_Agrotoxico, Prop_Id`;

            const cultivo = await db.query(sql);

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de Cultivo.', 
                dados: cultivo[0]
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    }, 
    
    async cadastrarCultivo(request, response) {
        try {            

            const { Cult_Nome, Cult_Agrotoxico, Prop_Id} = resquest.body;

            const sql = `INSERT INTO Cultivo (, Cult_Nome, Cult_Agrotoxico, Prop_Id) VALUES
( ?, ?, ? )`;

            const values = [Cult_Nome, Cult_Agrotoxico, Prop_Id];

            const execSql = await db.quary(sql, values);

            const Cult_Id = execSql[0].insetId;
            
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro de Cultivo.', 
                dados: Cult_Id
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    }, 
    async editarCultivo(request, response) {
        try {
            const {Cult_Nome, Cult_Agrotoxico, Prop_Id} = resquest.body;

            const {Cult_Id} = resquet.params;

            const sql = `UPDATE cultivo SET Cult_Nome = ?, Cult_Agrotocico = ?, Prop_Id = ?`;

            const values = [Cult_Nome, Cult_Agrotoxico, Prop_Id,Cult_Id];

            const atualizaDados = await db.query(sql, values);

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'editar Cultivo.', 
                dados: atualizaDados[0].affectedRows
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    }, 
    async apagarCultivo(request, response) {
        try {
            
            const {Cult_Id} = request.params;

            const sql = `DELETE FROM cultivo WHERE Cult_Id = ?`;

            const values = [Cult_Id];

            const excluir = await db.query(sql, values);

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cultivo ${Cult_Id} excluído com sucesso.', 
                dados: excluir[0].affectedRows
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    }, 
};  