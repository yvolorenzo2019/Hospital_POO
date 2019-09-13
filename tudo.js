var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var hospital;
(function (hospital) {
    var Pessoa = /** @class */ (function () {
        function Pessoa() {
        }
        Pessoa.prototype.getNome = function () {
            return this._nome;
        };
        Pessoa.prototype.setNome = function (nome) {
            this._nome = nome;
        };
        Pessoa.prototype.getCpf = function () {
            return this._cpf;
        };
        Pessoa.prototype.setCpf = function (cpf) {
            this._cpf = cpf;
        };
        return Pessoa;
    }());
    hospital.Pessoa = Pessoa;
})(hospital || (hospital = {}));
///<reference path="pessoa.ts"/>
var hospital;
(function (hospital) {
    var Paciente = /** @class */ (function (_super) {
        __extends(Paciente, _super);
        function Paciente() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Paciente.prototype.getCodPaciente = function () {
            return this._codPaciente;
        };
        Paciente.prototype.setCodPaciente = function (codPaciente) {
            this._codPaciente = codPaciente;
        };
        return Paciente;
    }(hospital.Pessoa));
    hospital.Paciente = Paciente;
})(hospital || (hospital = {}));
///<reference path="pessoa.ts"/>
var hospital;
(function (hospital) {
    var Funcionario = /** @class */ (function (_super) {
        __extends(Funcionario, _super);
        function Funcionario() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Funcionario.prototype.getFuncionario = function () {
            return this._codFuncionario;
        };
        Funcionario.prototype.setFuncionario = function (codFuncionario) {
            this._codFuncionario = codFuncionario;
        };
        return Funcionario;
    }(hospital.Pessoa));
    hospital.Funcionario = Funcionario;
})(hospital || (hospital = {}));
///<reference path="funcionario.ts"/>
var hospital;
(function (hospital) {
    var Enfermeiro = /** @class */ (function (_super) {
        __extends(Enfermeiro, _super);
        function Enfermeiro() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Enfermeiro.prototype.getCoren = function () {
            return this._coren;
        };
        Enfermeiro.prototype.setCoren = function (coren) {
            this._coren = coren;
        };
        return Enfermeiro;
    }(hospital.Funcionario));
    hospital.Enfermeiro = Enfermeiro;
})(hospital || (hospital = {}));
///<reference path="funcionario.ts"/>
///<reference path="pessoa.ts"/>
var hospital;
(function (hospital) {
    var Medico = /** @class */ (function (_super) {
        __extends(Medico, _super);
        function Medico() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Medico.prototype.getCrm = function () {
            return this._crm;
        };
        Medico.prototype.setCrm = function (crm) {
            this._crm = crm;
        };
        Medico.prototype.getEspecialidade = function () {
            return this._especialidade;
        };
        Medico.prototype.setEspecialidade = function (especialidade) {
            this._especialidade = especialidade;
        };
        return Medico;
    }(hospital.Funcionario));
    hospital.Medico = Medico;
})(hospital || (hospital = {}));
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
        Hospital.prototype.getPacientes = function () {
            return this._pacientes;
        };
        return Hospital;
    }());
    hospital.Hospital = Hospital;
})(hospital || (hospital = {}));
///<reference path="enfermeiro.ts"/>
///<reference path="pessoa.ts"/>
///<reference path="paciente.ts"/>
///<reference path="medico.ts"/>
///<reference path="hospital.ts"/>
var hospital;
(function (hospital_1) {
    var hospital = new hospital_1.Hospital();
    hospital.setNome("Stan Lee");
    // Enfermeiros 
    var enfermeiro = new hospital_1.Enfermeiro();
    enfermeiro.setFuncionario(1);
    enfermeiro.setNome("Wiccano");
    enfermeiro.setCpf("000.000.000-00");
    enfermeiro.setCoren(300000);
    var enfermeiro1 = new hospital_1.Enfermeiro();
    enfermeiro1.setFuncionario(2);
    enfermeiro1.setNome("Billy");
    enfermeiro1.setCpf("111.111.111-11");
    enfermeiro1.setCoren(3434333);
    var enfermeiro2 = new hospital_1.Enfermeiro();
    enfermeiro2.setFuncionario(3);
    enfermeiro2.setNome("Célere");
    enfermeiro2.setCpf("222.222.222-22");
    enfermeiro2.setCoren(1234333);
    // Medicos 
    var medico = new hospital_1.Medico();
    medico.setFuncionario(4);
    medico.setNome("Hulking");
    medico.setCpf("444.444.444-44");
    medico.setCrm(213);
    var medico1 = new hospital_1.Medico();
    medico1.setFuncionario(5);
    medico1.setNome("Cassie Lang");
    medico1.setCpf("333.333.333-33");
    medico1.setCrm(322);
    var medico2 = new hospital_1.Medico();
    medico2.setFuncionario(6);
    medico2.setNome("Gaviã Arqueira");
    medico2.setCpf("555.000.555-55");
    medico2.setCrm(321);
    //Pacientes
    var paciente = new hospital_1.Paciente();
    paciente.setCodPaciente(1);
    paciente.setNome("Magneto");
    paciente.setCpf("666.666.666-66");
    var paciente2 = new hospital_1.Paciente();
    paciente2.setCodPaciente(2);
    paciente2.setNome("Wanda");
    paciente2.setCpf("888.888.888-88");
    var paciente3 = new hospital_1.Paciente();
    paciente3.setCodPaciente(3);
    paciente3.setNome("Mercurio");
    paciente3.setCpf("999.999.999-99");
    document.getElementById("codEnfermeiro").textContent = enfermeiro.getFuncionario().toString();
    document.getElementById("nomeEnfermeiro").textContent = enfermeiro.getNome();
    document.getElementById("cpfEnfermeiro").textContent = enfermeiro.getCpf();
    document.getElementById("coren").textContent = enfermeiro.getCoren().toString();
    document.getElementById("codMedico").textContent = medico.getFuncionario().toString();
    document.getElementById("nomeMedico").textContent = medico.getNome();
    document.getElementById("cpfMedico").textContent = medico.getCpf();
    document.getElementById("crm").textContent = medico.getCrm().toString();
    document.getElementById("codPaciente").textContent = paciente.getCodPaciente().toString();
    document.getElementById("nomePaciente").textContent = paciente.getNome();
    document.getElementById("cpfPaciente").textContent = paciente.getCpf();
    hospital.addEnfermeiro(enfermeiro);
    hospital.addEnfermeiro(enfermeiro1);
    hospital.addEnfermeiro(enfermeiro2);
    hospital.addMedicos(medico);
    hospital.addMedicos(medico1);
    hospital.addMedicos(medico2);
    hospital.addPacientes(paciente);
    hospital.addPacientes(paciente2);
    hospital.addPacientes(paciente3);
    var tabela = document.getElementById("tabelaEnfermeiro");
    var tabela1 = document.getElementById("tabelaMedico");
    var tabela2 = document.getElementById("tabelaPaciente");
    var conteudo = "<tr><th>Enfermeiros do Hospital</th></tr>";
    hospital.getEnfermeiros().forEach(function (element) {
        conteudo += "<tr> <td>" + element.getFuncionario() + "</td> <td>" + element.getNome()
            + "</td> <td>" + element.getCpf() + "</td> <td>" + element.getCoren() + "</td> </tr>";
    });
    tabela.innerHTML = conteudo;
    var conteudo1 = "<tr><th>Médicos do Hospital</th></tr>";
    hospital.getMedicos().forEach(function (element) {
        conteudo1 += "<tr> <td>" + element.getFuncionario() + "</td><td>" + element.getNome()
            + "</td><td>" + element.getCpf() + "</td><td>" + element.getCrm() + "</td></tr>";
    });
    tabela1.innerHTML = conteudo1;
    var conteudo2 = "<tr><th>Pacientes do Hospital</th></tr>";
    hospital.getPacientes().forEach(function (element) {
        conteudo2 += "<tr><td>" + element.getCodPaciente() + "</td><td>" + element.getNome() + "</td><td>" + element.getCpf()
            + "</td></tr>";
    });
    tabela2.innerHTML = conteudo2;
})(hospital || (hospital = {}));
