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
        Pessoa.prototype.setNome = function (no) {
            this._nome = no;
        };
        Pessoa.prototype.getNome = function () {
            return this._nome;
        };
        Pessoa.prototype.setCpf = function (cpf) {
            this._cpf = cpf;
        };
        Pessoa.prototype.getCpf = function () {
            return this._cpf;
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
        Paciente.prototype.setCodPaciente = function (codPaciente) {
            this._codPaciente = codPaciente;
        };
        Paciente.prototype.getCodPaciente = function () {
            return this._codPaciente;
        };
        Paciente.prototype.getHospital = function () {
            return this._hospital;
        };
        Paciente.prototype.setHospital = function (hosp) {
            this._hospital = hosp;
        };
        Paciente.prototype.setSetor = function (setor) {
            this._setor = setor;
        };
        Paciente.prototype.mostrarSetor = function () {
            return this._setor;
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
        Funcionario.prototype.setCodFuncionario = function (codFuncionario) {
            this._codFuncionario = codFuncionario;
        };
        Funcionario.prototype.getCodFuncionario = function () {
            return this._codFuncionario;
        };
        return Funcionario;
    }(hospital.Pessoa));
    hospital.Funcionario = Funcionario;
})(hospital || (hospital = {}));
///<reference path="funcionario.ts"/>
var hospital;
(function (hospital) {
    var Medico = /** @class */ (function (_super) {
        __extends(Medico, _super);
        function Medico() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Medico.prototype.setCrm = function (crm) {
            this._crm = crm;
        };
        Medico.prototype.getCrm = function () {
            return this._crm;
        };
        Medico.prototype.setEspecialidade = function (especialidade) {
            this._especialidade = especialidade;
        };
        Medico.prototype.getEspecialidade = function () {
            return this._especialidade;
        };
        Medico.prototype.getHospital = function () {
            return this._hospital;
        };
        Medico.prototype.setHospital = function (hosp) {
            this._hospital = hosp;
        };
        return Medico;
    }(hospital.Funcionario));
    hospital.Medico = Medico;
})(hospital || (hospital = {}));
var hospital;
(function (hospital) {
    var ProntoSocorro = /** @class */ (function () {
        function ProntoSocorro() {
        }
        ProntoSocorro.prototype.setCodProntoSocorro = function (prontoSocorro) {
            this._codProntoSocorro = prontoSocorro;
        };
        ProntoSocorro.prototype.getCodProntoSocorro = function () {
            return this._codProntoSocorro;
        };
        ProntoSocorro.prototype.setEndereco = function (endereco) {
            this._endereco = endereco;
        };
        ProntoSocorro.prototype.getEndereco = function () {
            return this._endereco;
        };
        return ProntoSocorro;
    }());
    hospital.ProntoSocorro = ProntoSocorro;
})(hospital || (hospital = {}));
///<reference path="funcionario.ts"/>
var hospital;
(function (hospital) {
    var Enfermeiro = /** @class */ (function (_super) {
        __extends(Enfermeiro, _super);
        function Enfermeiro() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Enfermeiro.prototype.setCoren = function (coren) {
            this._coren = coren;
        };
        Enfermeiro.prototype.getCoren = function () {
            return this._coren;
        };
        Enfermeiro.prototype.getHospital = function () {
            return this._hospital;
        };
        Enfermeiro.prototype.setHospital = function (hosp) {
            this._hospital = hosp;
        };
        Enfermeiro.prototype.setSetor = function (setor) {
            this._setor = setor;
        };
        Enfermeiro.prototype.mostrarSetor = function () {
            return this._setor;
        };
        return Enfermeiro;
    }(hospital.Funcionario));
    hospital.Enfermeiro = Enfermeiro;
})(hospital || (hospital = {}));
var hospital;
(function (hospital) {
    var Hospital = /** @class */ (function () {
        function Hospital() {
            this._enfermeiros = [];
            this._medicos = [];
            this._paciente = [];
            this._prontoSocorro = [];
        }
        Hospital.prototype.setNome = function (nome) {
            this._nome = nome;
        };
        Hospital.prototype.getNome = function () {
            return this._nome;
        };
        Hospital.prototype.addEnfermeiro = function (enfermeiro) {
            this._enfermeiros.push(enfermeiro);
        };
        Hospital.prototype.getEnfermeiro = function () {
            return this._enfermeiros;
        };
        Hospital.prototype.addMedicos = function (medico) {
            this._medicos.push(medico);
        };
        Hospital.prototype.getMedicos = function () {
            return this._medicos;
        };
        Hospital.prototype.addPaciente = function (paciente) {
            this._paciente.push(paciente);
        };
        Hospital.prototype.getPaciente = function () {
            return this._paciente;
        };
        Hospital.prototype.addProntoSocorro = function (prontSoco) {
            this._prontoSocorro.push(prontSoco);
        };
        Hospital.prototype.getProntoSocorro = function () {
            return this._prontoSocorro;
        };
        return Hospital;
    }());
    hospital.Hospital = Hospital;
})(hospital || (hospital = {}));
///<reference path="pessoa.ts"/>
///<reference path="paciente.ts"/>
///<reference path="medico.ts"/>
///<reference path="enfermeiro.ts"/>
///<reference path="hospital.ts"/>
///<reference path="prontoSocorro.ts"/>
var hospital;
(function (hospital_1) {
    //Instanciando Classe;
    //Hospitais
    var hospital = new hospital_1.Hospital();
    hospital.setNome("Hospital vera cruz");
    var hospital1 = new hospital_1.Hospital();
    hospital1.setNome("Hospital regina maria");
    var hospital2 = new hospital_1.Hospital();
    hospital2.setNome("Hospital agenor");
    // criando o codigo de funcionario
    /**let funcionario = new Funcionario();
    *funcionario.setCodFuncionario(1);

    *let funcionario1 = new Funcionario();
    *funcionario1.setCodFuncionario(2);

    let funcionario2 = new Funcionario();
    funcionario2.setCodFuncionario(3);*/
    //Pacientes
    var paciente = new hospital_1.Paciente();
    paciente.setCodPaciente(1);
    paciente.setNome('luiz');
    paciente.setCpf('111.111.111-11');
    paciente.setHospital(hospital);
    paciente.setSetor("emergencial");
    var paciente1 = new hospital_1.Paciente();
    paciente1.setCodPaciente(2);
    paciente1.setNome('vini');
    paciente1.setCpf('222.222.222-22');
    paciente1.setHospital(hospital1);
    paciente1.setSetor("cirurgico");
    var paciente2 = new hospital_1.Paciente();
    paciente2.setCodPaciente(3);
    paciente2.setNome('yvo');
    paciente2.setCpf('333.333.333-33');
    paciente2.setHospital(hospital2);
    paciente2.setSetor("recepção");
    //Enfermeiros
    var enfermeiro = new hospital_1.Enfermeiro();
    enfermeiro.setCoren(273485);
    enfermeiro.setNome('jorge');
    enfermeiro.setCpf('555.555.555-54');
    enfermeiro.setHospital(hospital);
    enfermeiro.setCodFuncionario(1);
    enfermeiro.setSetor("cirurgião");
    var enfermeiro1 = new hospital_1.Enfermeiro();
    enfermeiro1.setCoren(273485);
    enfermeiro1.setNome('joaquim');
    enfermeiro1.setCpf('765.765.765-67');
    enfermeiro1.setHospital(hospital1);
    enfermeiro1.setCodFuncionario(2);
    enfermeiro1.setSetor("socorrista");
    var enfermeiro2 = new hospital_1.Enfermeiro();
    enfermeiro2.setCoren(273485);
    enfermeiro2.setNome('carlos');
    enfermeiro2.setCpf('434.434.434-33');
    enfermeiro2.setHospital(hospital2);
    enfermeiro2.setCodFuncionario(3);
    enfermeiro2.setSetor("socorrista");
    //Médicos
    var medico = new hospital_1.Medico();
    medico.setEspecialidade(2);
    medico.setCrm(1348623);
    medico.setNome('marcos');
    medico.setCpf('886.886.886-11');
    medico.setHospital(hospital);
    medico.setCodFuncionario(1);
    var medico1 = new hospital_1.Medico();
    medico1.setEspecialidade(4);
    medico1.setCrm(9846545);
    medico1.setNome('joão');
    medico1.setCpf('222.222.222-21');
    medico1.setHospital(hospital1);
    medico1.setCodFuncionario(2);
    var medico2 = new hospital_1.Medico();
    medico2.setEspecialidade(2);
    medico2.setCrm(2311254);
    medico2.setNome('evandro');
    medico2.setCpf('112.112.112-12');
    medico2.setHospital(hospital2);
    medico2.setCodFuncionario(3);
    //instancias de pronto socorro
    var prontoSocorro = new hospital_1.ProntoSocorro();
    prontoSocorro.setCodProntoSocorro(1);
    prontoSocorro.setEndereco("rua bergamota, 222, Vila velha");
    var prontoSocorro1 = new hospital_1.ProntoSocorro();
    prontoSocorro1.setCodProntoSocorro(2);
    prontoSocorro1.setEndereco("av velha morte, 112, Vila velha");
    var prontoSocorro2 = new hospital_1.ProntoSocorro();
    prontoSocorro2.setCodProntoSocorro(3);
    prontoSocorro2.setEndereco("av nova esperança, 5555, Esperança");
    //Adicionar membros ao hospital
    hospital.addPaciente(paciente);
    hospital.addPaciente(paciente1);
    hospital.addPaciente(paciente2);
    hospital.addEnfermeiro(enfermeiro);
    hospital.addEnfermeiro(enfermeiro1);
    hospital.addEnfermeiro(enfermeiro2);
    hospital.addMedicos(medico);
    hospital.addMedicos(medico1);
    hospital.addMedicos(medico2);
    hospital.addProntoSocorro(prontoSocorro);
    hospital.addProntoSocorro(prontoSocorro1);
    hospital.addProntoSocorro(prontoSocorro2);
    var tabPaciente = document.getElementById('paciente');
    var conteudo = "<tr> <td>Hospital</td> <td>Código</td> <td>Nome</td> <td>CPF</td> </tr>";
    hospital.getPaciente().forEach(function (element) {
        conteudo += "<tr> <td>" + element.getHospital().getNome() + "</td> <td>" + element.getCodPaciente() + "</td> <td>" + element.getNome() + "</td> <td>" + element.getCpf() + "</td> </tr>";
    });
    tabPaciente.innerHTML = conteudo;
    var tabEnfermeiro = document.getElementById('enfermeiro');
    var conteudo2 = "<tr> <td>Hospital</td> <td>Código</td> <td>Nome</td> <td>CPF</td> <td>Coren</td> </tr>";
    hospital.getEnfermeiro().forEach(function (element) {
        conteudo2 += "<tr> <td>" + element.getHospital().getNome() + "</td> <td>" + element.getCodFuncionario() + "</td> <td>" + element.getNome() + "</td> <td>" + element.getCpf() + "</td> <td>" + element.getCoren() + "</td> </tr>";
    });
    tabEnfermeiro.innerHTML = conteudo2;
    var tabMedico = document.getElementById('medico');
    var conteudo3 = "<tr> <td>Hospital</td> <td>Código</td> <td>Nome</td> <td>CPF</td> <td>CRM</td> <td>Especialidade</td> </tr>";
    hospital.getMedicos().forEach(function (element) {
        conteudo3 += "<tr> <td>" + element.getHospital().getNome() + "</td> <td>" + element.getCodFuncionario() + "</td> <td>" + element.getNome() + "</td> <td>" + element.getCpf() + "</td> <td>" + element.getCrm() + "</td> <td>" + element.getEspecialidade() + "</td> </tr>";
    });
    tabMedico.innerHTML = conteudo3;
    var tabProntoSocorro = document.getElementById('prontoSocorro');
    var conteudo4 = "<tr> <td>codigo </td> <td> endereço </td> </tr>";
    hospital.getProntoSocorro().forEach(function (element) {
        conteudo4 += "<tr> <td>" + element.getCodProntoSocorro() + "</td><td>" + element.getEndereco() + "</td></tr>";
    });
    tabProntoSocorro.innerHTML = conteudo4;
})(hospital || (hospital = {}));
