export class Flunt{
    
    constructor(public erros: any[] = []) { }

    isRequired(value, message){
        if (!value || value.length <= 0) {
            this.erros.push(message);
        }
    }

    hasMinLen = (value, min, message) =>{
        if(!value || value.length < min){
            this.erros.push(message);
        }
    }

    hasMaxLen = (value, max, message) =>{
        if (!value || value.length > max) {
            this.erros.push(message);
        }
    }

    isEmail = (value, message) =>{
        const reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
        if (!reg.test(value)) {
            this.erros.push(message);
        }
    }

    isFixedLen = (value, len, message) =>{
        if (value.length !== len) {
            this.erros.push(message);
        }
    }

    clear(){
        this.erros = [];
    }

    isValid(){
        return this.erros.length === 0;
    }
}