import Pagina from '../layouts/Pagina';
import { Alert } from "react-bootstrap";
import { useState } from "react";
import TabelaClientes from './Tabelas/TabelaCliente';
import FormCadCliente from './Formularios/FormCadCliente';
import { clientes } from '../../dados/mockClientes';

export default function TelaCadastroCliente(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaDeClientes, setListaDeClientes] = useState(clientes); // Lista de clientes
    const [modoEdicao, setModoEdicao] = useState(false);
    const [clienteSelecionado, setClienteSelecionado] = useState({
        nome: "",
        cpf: "",
        endereco: "",
        cep: "",
        telefone: "",
        email: ""
    });

    return (
        <Pagina>
            <Alert className="text-center" variant="success">
                <h2 className="text-center">Tela de cadastro de Clientes</h2>
            </Alert>
            {exibirTabela ? 
                <TabelaClientes 
                    listaClientes={listaDeClientes}
                    setListaDeClientes={setListaDeClientes}
                    setExibirTabela={setExibirTabela}
                    setmodoEdicao={setModoEdicao}
                    setClienteSelecionado={setClienteSelecionado}
                /> :
                <FormCadCliente 
                    listaClientes={listaDeClientes}
                    setListaDeClientes={setListaDeClientes}
                    setExibirTabela={setExibirTabela}
                    modoEdicao={modoEdicao}
                    setmodoEdicao={setModoEdicao}
                    clienteSelecionado={clienteSelecionado}
                    setClienteSelecionado={setClienteSelecionado}
                />
            }
        </Pagina>
    );
}