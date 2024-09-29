import Pagina from '../layouts/Pagina';
import { Alert } from "react-bootstrap";
import FormCadUsuario from "./Formularios/FormCadUsuario";
import TabelaUsuarios from './Tabelas/TabelaUsuario';
import { useState } from "react";
import { usuarios } from '../../dados/mockUsuario';

export default function TelaCadastroUsuario(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaDeUsuarios, setListaDeUsuarios] = useState(usuarios);
    const [modoAlterar, setModoAlterar] = useState(false);
    const [usuarioSelecionado, setUsuarioSelecionado] = useState({
        codigo: 0,
        nome: "",
        email: "",
        senha: ""
    });

    return (
        <Pagina>
            <Alert className="text-center" variant="success">
                <h2 className="text-center">Tela de cadastro de Usuários</h2>
            </Alert>
            {
                exibirTabela ? 
                <TabelaUsuarios listaUsuarios={listaDeUsuarios} setListaDeUsuarios={setListaDeUsuarios}
                                setExibirTabela={setExibirTabela} setModoAlterar={setModoAlterar}
                                modoAlterar={modoAlterar} setUsuarioSelecionado={setUsuarioSelecionado} /> :
                <FormCadUsuario listaUsuarios={listaDeUsuarios} setListaDeUsuarios={setListaDeUsuarios}
                                setExibirTabela={setExibirTabela} setModoAlterar={setModoAlterar}
                                modoAlterar={modoAlterar} 
                                setUsuarioSelecionado={setUsuarioSelecionado} usuarioSelecionado={usuarioSelecionado} />
            }
        </Pagina>
    );
}
