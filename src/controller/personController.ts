import { PersonDAO } from "../dao/personDAO";
import { createDataInput, validateDataInput } from "../process/personProcess";
export function executeInsertValidation (){
    if (validateDataInput(createDataInput)){
        const personDAO = new PersonDAO(Person)
        personDAO.buildPersonDAO(createDataInput);
        personDAO.insertPersonDAO(Person);
        alert("Dados inseridos com sucesso");
    }
    else{
        alert("Preencha todos os campos");
    }
}