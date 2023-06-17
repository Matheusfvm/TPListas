import mysql, { Connection, RowDataPacket } from 'mysql2/promise';

export default class BancoDados {
    private conexao!: Connection  
    async conectar() {
        try {
            this.conexao = await mysql.createConnection({ 
                host: 'localhost',
                user: 'root',
                password: 'root', 
                database: 'wb', 
                port: 3306
            })
            
        } catch(erro) {
            console.log('Erro na conexão com o banco de dados', erro)
        }
    }
    
    async query(sql: string, values?: any[]): Promise<any[]> {
        const resultados = await this.conexao.query(sql, values);
        return resultados;
      }

    async desconectar(){
        await this.conexao.end()
    }    
}
