import * as mysql from 'mysql2/promise';

export default class BancoDados {
    private conexao!: mysql.Connection  
    async conectar() {
        try {
            this.conexao = await mysql.createConnection({ 
                host: 'localhost',
                user: 'root',
                password: '1123', 
                database: 'wb', 
                port: 3306
            })
            
        } catch(erro) {
            console.log('Erro na conexão com o banco de dados', erro)
        }
    }

    async desconectar(){
        await this.conexao.end()
    }    
}
