import Pagina from '../layouts/Pagina';
import { Alert } from "react-bootstrap";
import { useState } from "react";
import { entregadores } from "../../dados/mockEntregador";
import TabelaEntregadores from './Tabelas/TabelaEntregador';
import FormCadEntregador from "./Formularios/FormCadEntregador"

export default function TelaCadastroEntregador(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaDeEntregadores, setListaDeEntregadores] = useState(entregadores);
    const [modoAlterar, setModoAlterar] = useState(false);
    const [entregadorSelecionado, setEntregadorSelecionado] = useState({
        codigo: 0,
        nome: "",
        cnpj: "",
        veiculo: "",
        placa: ""
    });

    return (
        <Pagina>
            <Alert className="text-center" variant="success">
                <h2 className="text-center">Tela de cadastro de Entregadores</h2>
            </Alert>
            {
                exibirTabela ?
                <TabelaEntregadores listaEntregadores={listaDeEntregadores} 
                                    setListaDeEntregadores={setListaDeEntregadores} 
                                    setExibirTabela={setExibirTabela}
                                    setModoAlterar={setModoAlterar}
                                    modoAlterar={modoAlterar} 
                                    setEntregadorSelecionado={setEntregadorSelecionado} /> :
                <FormCadEntregador listaEntregadores={listaDeEntregadores} 
                                   setListaDeEntregadores={setListaDeEntregadores}
                                   setExibirTabela={setExibirTabela} 
                                   setModoAlterar={setModoAlterar}
                                   modoAlterar={modoAlterar} 
                                   setEntregadorSelecionado={setEntregadorSelecionado} 
                                   entregadorSelecionado={entregadorSelecionado} />
            }
        </Pagina>
    );
}

