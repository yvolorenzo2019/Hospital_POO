///<reference path="enfermeiro.ts"/>
///<reference path="paciente.ts"/>
///<reference path="medico.ts"/>
namespace hospital{
    let hospital = new Hospital();
    hospital.setNome("Stan Lee");
    
    // Enfermeiros 
    let enfermeiro = new Enfermeiro();
    enfermeiro.setFuncionario(1);
    enfermeiro.setNome("Wiccano");
    enfermeiro.setCpf("000.000.000-00");
    enfermeiro.setCoren(300000);

    let enfermeiro1 = new Enfermeiro();
    enfermeiro1.setFuncionario(2);
    enfermeiro1.setNome("Billy");
    enfermeiro1.setCpf("111.111.111-11");
    enfermeiro1.setCoren(3434333);

    let enfermeiro2 = new Enfermeiro();
    enfermeiro2.setFuncionario(3);
    enfermeiro2.setNome("Célere");
    enfermeiro2.setCpf("222.222.222-22");
    enfermeiro2.setCoren(1234333);

    // Medicos 
    let medico = new Medico();
    medico.setFuncionario(4);
    medico.setNome("Hulking");
    medico.setCpf("444.444.444-44");
    medico.setCrm(213);

    let medico1 = new Medico();
    medico1.setFuncionario(4);
    medico1.setNome("Cassie Lang");
    medico1.setCpf("333.333.333-33");
    medico1.setCrm(322);

    let medico2 = new Medico();
    medico2.setFuncionario(4);
    medico2.setNome("Gaviã Arqueira");
    medico2.setCpf("555.555.555-55");
    medico2.setCrm(321);
    
    //Pacientes
    let paciente = new Paciente();
    paciente.setCodPaciente(1);
    paciente.setNome("Magneto");
    paciente.setCpf("666.666.666-66");

    let paciente2 = new Paciente();
    paciente2.setCodPaciente(2);
    paciente2.setNome("Wanda");
    paciente2.setCpf("888.888.888-88");

    let paciente3 = new Paciente();
    paciente3.setCodPaciente(3);
    paciente3.setNome("Mercurio");
    paciente3.setCpf("999.999.999-99");


}