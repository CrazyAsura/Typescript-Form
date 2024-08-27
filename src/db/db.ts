import * as dotenv from 'dotenv'
dotenv.config()

class databaseConfigClass {
        private static pool: any;
        private database?: any;
        private databaseName: string;
        private host: string | number;
        private user: string;
        private password: string | number;

        constructor(database: string, host: string | number, databaseName: string, user: string, password: string | number) {
            this.database = require(database);
            this.host = host;
            this.databaseName = databaseName;
            this.user = user; 
            this.password = password;
        }

        public databaseConfig(database: string): any {
            if (database === "mysql") {
                const pool = this.database.createPool({
                    host: this.host,
                    user: this.user,
                    password: this.password,
                    database: this.databaseName,
                    connectionLimit: 10,
                    multipleStatements: true
                });
                return pool;
            }
            return null;
        }
}

interface databaseGetConnectionInterface{
    getConnectDB(): any;
}

interface databaseGetDisconnectionInterface{
    getDisconnectDB(): any;
}

export class databaseGetConnection extends  databaseConfigClass implements  databaseGetConnectionInterface{
        constructor(){
            super('mysql',process.env.DBNAME || 'javascript' ,process.env.DBHOST ||'localhost' ,process.env.DBUSER || 'root' ,process.env.DBPASSWORD || 'Nero@3355');
        }
         getConnectDB() {
            this.databaseConfig('mysql').connet((error: Error) => {
                if (error) throw error;
                console.log('Connected to the MySQL server.');
            });
        }
}

export class databaseGetDisconnection extends  databaseConfigClass implements databaseGetDisconnectionInterface{
        constructor(){
            super('mysql',process.env.DBNAME || 'javascript' ,process.env.DBHOST || 'localhost' ,process.env.DBUSER || 'root' ,process.env.DBPASSWORD || 'Nero@3355' );
        }
         getDisconnectDB() {
            this.databaseConfig('mysql').end((error: Error) => {
                if (error) throw error;
                console.log('Connected to the MySQL server.');
            });
        }
}
