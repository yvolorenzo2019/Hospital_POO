namespace hospital{
    export class Hospital{
        private _nome:string;
        private _enfermeiros:Array<Enfermeiro> = [];
        private _medicos:Array<Medico> = [];
        private _pacientes:Array<Paciente> = [];

        public getNome(){
            return this._nome;
        }

        public setNome(nome:string){
            this._nome = nome;
        }

        public addEnfermeiro(enfermeiro:Enfermeiro){
             this._enfermeiros.push(enfermeiro);
        }

        public getEnfermeiros(){
            return this._enfermeiros;
        }
        
        public addMedicos(medico:Medico){
             this._medicos.push(medico);
        }

        public getMedicos(){
            return this._medicos;
        }

        public addPacientes(paciente:Paciente){
            this._pacientes.push(paciente);
        }
        public getPacientes(){
            return this._pacientes;
        }

    }
    
}