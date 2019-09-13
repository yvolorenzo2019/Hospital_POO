///<reference path="enfermeiro.ts"/>
///<reference path="pessoa.ts"/>
///<reference path="paciente.ts"/>
///<reference path="medico.ts"/>
///<reference path="hospital.ts"/>
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
    medico1.setFuncionario(5);
    medico1.setNome("Cassie Lang");
    medico1.setCpf("333.333.333-33");
    medico1.setCrm(322);

    let medico2 = new Medico();
    medico2.setFuncionario(6);
    medico2.setNome("Gaviã Arqueira");
    medico2.setCpf("555.000.555-55");
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

    document.getElementById("hospital").textContent = hospital.getNome();

    let tabela = document.getElementById("tabelaEnfermeiro");
    let tabela1 = document.getElementById("tabelaMedico");
    let tabela2 = document.getElementById("tabelaPaciente");

    let conteudo = "<tr> <th>Enfermeiro</th> <th>Hospital</th> </tr>";
    hospital.getEnfermeiros().forEach(element => {
        conteudo += "<tr> <td>"+element.getFuncionario()+"</td> <td>"+element.getNome()
                 +"</td> <td>"+element.getCpf()+"</td> <td>"+element.getCoren()+"</td> </tr>";
    });
    tabela.innerHTML = conteudo;

    let conteudo1 = "<tr><th>Médico</th> <th>Hospital</th></tr>";
    hospital.getMedicos().forEach(element => {
        conteudo1 += "<tr> <td>"+element.getFuncionario()+"</td><td>"+element.getNome()
                 +"</td><td>"+element.getCpf()+"</td><td>"+element.getCrm()+"</td></tr>";
    });
    tabela1.innerHTML = conteudo1;

    let conteudo2 = "<tr><th>Paciente</th> <th>Hospital</th></tr>";
    hospital.getPacientes().forEach(element => {
        conteudo2 += "<tr><td>"+element.getCodPaciente()+"</td><td>"+element.getNome() +"</td><td>"+element.getCpf()
                 +"</td></tr>";
    });
    tabela2.innerHTML = conteudo2;




}