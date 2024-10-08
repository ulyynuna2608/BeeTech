const db = require('../database/connection'); 

module.exports = {
    async listarCultivoPropriedade(request, response) {
        try {            
            const sql = `SELECT Cult_Prop_Id, Cult_Id, Prop_Id`;

            const cultivo_propriedade = await db.query(sql);

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de Cultivo Propriedade.', 
                dados: cultivo_propriedade[0]
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    }, 
    
    async cadastrarCultivoPropriedade(request, response) {
        try {            

            const { Cult_Id, Cult_Arotoxico, Prop_Id} = resquest.body;

            const sql = `INSERT INTO cultivo_propriedade ( Cult_Id , Prop_Id) VALUES
( ?, ? )`;

            const values = [Cult_Id, , Prop_Id];

            const execSql = await db.quary(sql, values);

            const Cult_Prop_Id = execSql[0].insetId;

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro de Cultivo Propriedade.', 
                dados: Cult_Prop_Id
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    }, 
    async editarCultivoPropriedade(request, response) {
        try {            

            const {Cult_Id, Prop_Id} = resquest.body;

            const {Cult_Prop_Id} = resquet.params;

            const sql = `UPDATE cultivo_propriedade SET Cult_Id= ?, Prop_Id = ?`;

            const values = [Cult_Prop_Id, Prop_Id,Cult_Id];

            const atualizaDados = await db.query(sql, values);

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'editar Cultivo Propriedade.', 
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
    async apagarCultivoPropriedade(request, response) {
        try {            

            const {Cult_Prop_Id} = request.params;

            const sql = `DELETE FROM cultivo_propriedade WHERE Cult_Prop_Id = ?`;

            const values = [Cult_Prop_Id];

            const excluir = await db.query(sql, values);

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cultivo_propriedade ${Cult_Id} excluído com sucesso.', 
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