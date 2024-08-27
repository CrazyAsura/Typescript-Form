import DOMPurify = require("dompurify");
import { PersonDAO } from "../dao/personDAO";

type data = {
    name: string;
    email: string;
    ddd: number;
    phone: number;
    number_residence: number;
    street: string;
    district: string;
    city: string;
    state: string;
    cep: number;
    password: string;
}

const sanitizeInput = (input: any): any => {
    return DOMPurify.sanitize(input);
  };

export const createDataInput = () => {

    const data: data = {

        name: sanitizeInput(document.querySelector('input[name="name_input"]') as HTMLInputElement).value,
        email: sanitizeInput(document.querySelector('input[name="email_input"]') as HTMLInputElement).value,
        ddd: parseInt(sanitizeInput(document.querySelector('input[name="ddd_input"]') as HTMLInputElement).value, 3),
        phone: parseInt(sanitizeInput(document.querySelector('input[name="phone_input"]') as HTMLInputElement).value),
        number_residence: parseInt(sanitizeInput(document.querySelector('input[name="number_residence_input"]') as HTMLInputElement).value),
        street: sanitizeInput(document.querySelector('input[name="street_input"]') as HTMLInputElement).value,
        district: sanitizeInput(document.querySelector('input[name="district_input"]') as HTMLInputElement).value,
        city: sanitizeInput(document.querySelector('input[name="city_input"]') as HTMLInputElement).value,
        state: sanitizeInput(document.querySelector('input[name="state_input"]') as HTMLInputElement).value,
        cep: parseInt(sanitizeInput(document.querySelector('input[name="cep_input"]') as HTMLInputElement).value),
        password: sanitizeInput(document.querySelector('input[name="password_input"]') as HTMLInputElement).value

    };
    return data;
}

export function validateDataInput(data: any) {
    const confirmPassword = sanitizeInput(document.querySelector('input[name="conf_senha_input"]') as HTMLInputElement).value;
    
    if(!data.name|| !data.email|| !data.ddd|| !data.phone|| !data.number_residence|| !data.street|| !data.district|| !data.city|| !data.state|| !data.cep|| !data.password){

        alert("Preencha todos os campos");

        if(data.name.length < 3 || data.name.length > 255){

        alert("Nome deve ter entre 4 e 255 caracteres.");

        }

        if(data.password.length < 8 || data.name.length > 255 && confirmPassword.length < 8 || confirmPassword.length > 255){

            alert("Senha e a confirmação devem ter entre 8 e 255 caracteres.");

            }
        
        if(!data.password == confirmPassword){
            alert("A senha e a confirmação da senha devem ser iguais.");
        }
        return false;

    }
    
    return true;

}