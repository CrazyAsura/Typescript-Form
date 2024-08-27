import { databaseGetConnection, databaseGetDisconnection } from '../db/db';
export class PersonDAO implements PersonDAOInterface {
    private person: Person;
    private stmt: any;
    private dbConnection: any; // store the database connection here

    constructor(person: any) {
        this.person = person;
    }

    public async buildPersonDAO(data: any) {
        return await this.person.setName(data.name),
                     this.person.setEmail(data.email),
                     this.person.setDDD(data.ddd),
                     this.person.setPhone(data.phone),
                     this.person.setNumber_residence(data.number_residence),
                     this.person.setStreet(data.street),
                     this.person.setDistrict(data.district),
                     this.person.setCity(data.city),
                     this.person.setState(data.state),
                     this.person.setCep(data.cep),
                     this.person.setPassword(data.password);
        
    }

    public async getPersonDAO(id: number) {
        try{
            this.dbConnection = new databaseGetConnection().getConnectDB(); // get the connection
            // use the connection to perform a query to retrieve the person
            const stmt = this.dbConnection.query(`SELECT * FROM persons WHERE id = ${id}`);
             return await stmt;
        }
        finally{
            new databaseGetDisconnection().getDisconnectDB(); // disconnect from the database
        }
    }


    public async insertPersonDAO(person: any) {
        try{
            this.dbConnection = new databaseGetConnection().getConnectDB(); // get the connection
            // use the connection to perform an insert query
            const stmt = this.dbConnection.query(`INSERT INTO persons SET ?`, [person.getCep,person.getCity,person.getDistrict,person.getDDD,person.getEmail,person.getNumber_residence,person.getPassword,person.getPhone,person.getState,person.getStreet]);
             return await stmt;
        }
        finally{
            new databaseGetDisconnection().getDisconnectDB(); // disconnect from the database
        }
    }

    public async updatePersonDAO(person: any) {
        try{
            this.dbConnection = new databaseGetConnection().getConnectDB(); // get the connection
            // use the connection to perform an update query
            const stmt = this.dbConnection.query(`UPDATE persons SET ? WHERE id = ${person.getID()}`, [person.getName(),person.getEmail(),person.getDDD(),person.getPhone(),person.getNumber_residence(),person.getStreet(),person.getDistrict(),person.getCity(),person.getState(),person.getCep(),person.getPassword()]);
             return await stmt;
        }
        finally{
            new databaseGetDisconnection().getDisconnectDB(); // disconnect from the database
        }
    }

    public async deletePersonDAO(person: any) {
        try{
            this.dbConnection = new databaseGetConnection().getConnectDB(); // get the connection
            // use the connection to perform a delete query
            const stmt = this.dbConnection.query(`DELETE FROM persons WHERE id = ${person.getID}`);
             return await stmt;
        } 
        finally{
            new databaseGetDisconnection().getDisconnectDB(); // disconnect from the database
        }
    }
}
