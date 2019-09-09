///<reference path="funcionario.ts"/>
namespace hospital{
    export class Medico extends Funcionario {
        private _crm:number;
        private _especialidade:number;

        public getCrm(){
            return this._crm;
        }

        public setCrm(crm:number){
            this._crm = crm;
        }

        public getEspecialidade(){
            return this._especialidade;
        }

        public setEspecialidade(especialidade:number){
            this._especialidade = especialidade;
        }

    }
}