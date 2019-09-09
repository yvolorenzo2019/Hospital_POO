///<reference path="enfermeiro.ts"/>
///<reference path="paciente.ts"/>
///<reference path="medico.ts"/>
var hospital;
(function (hospital) {
    var Hospital = /** @class */ (function () {
        function Hospital() {
            this._enfermeiros = [];
            this._medicos = [];
            this._pacientes = [];
        }
        Hospital.prototype.getNome = function () {
            return this._nome;
        };
        Hospital.prototype.setNome = function (nome) {
            this._nome = nome;
        };
        Hospital.prototype.addEnfermeiro = function (enfermeiro) {
            this._enfermeiros.push(enfermeiro);
        };
        Hospital.prototype.getEnfermeiros = function () {
            return this._enfermeiros;
        };
        Hospital.prototype.addMedicos = function (medico) {
            this._medicos.push(medico);
        };
        Hospital.prototype.getMedicos = function () {
            return this._medicos;
        };
        Hospital.prototype.addPacientes = function (paciente) {
            this._pacientes.push(paciente);
        };
        return Hospital;
    }());
    hospital.Hospital = Hospital;
})(hospital || (hospital = {}));
