///<reference path="pessoa.ts"/>
namespace hospital{
    export class Funcionario extends Pessoa{

        private _codFuncionario:number;
        
        public getFuncionario(){
            return this._codFuncionario;
        }

        public setFuncionario(codFuncionario:number){
            this._codFuncionario = codFuncionario;
        }
    }
}