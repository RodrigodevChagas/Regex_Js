class ValidaCodigo {
   
    constructor(codigo){

        if(! this._validaCodigo(codigo)) {
            console.log(`O texto ${codigo} não é um código válido`);
        }
        this._codigo = codigo;
    }

    _validaCodigo(codigo) {
    
        return /\D{3}-\D{2}-\d{2}/.test(codigo);
    }

    get codigo(){

        return this._codigo;
    }
}    
let codigo1 = new ValidaCodigo('GWZ-JJ-12'); // válido
console.log(codigo1.texto);
let codigo2 = new ValidaCodigo('1X1-JJ-12'); // inválido
console.log(codigo2.texto);