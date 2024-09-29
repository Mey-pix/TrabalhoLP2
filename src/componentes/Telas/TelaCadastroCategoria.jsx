import Pagina from '../layouts/Pagina';
import TabelaCategorias from './Tabelas/TabelaCategorias';
import FormCadCategoria from './Formularios/FormCadCategoria';
import { Alert } from "react-bootstrap";
import { useState } from "react";
import { categoria } from '../../dados/mockCategorias';

export default function TelaCadastroCategoria(props) 
{
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaDeCategorias, setListaDeCategorias] = useState(categoria);
    const [modoAlterar, setModoAlterar] = useState(false);
    const [categoriaSelecionada, setCategoriaSelecionada] = useState({
        codigo: "",
        descricao: ""
    });

    return (
        <div>
            <Pagina>
                <Alert className="text-center" variant="success">
                    <h2 className="text-center">Cadastro de Categorias</h2>
                </Alert>
                {exibirTabela ?
                    <TabelaCategorias
                        listaCategorias={listaDeCategorias}
                        setListaCategorias={setListaDeCategorias}
                        setExibirTabela={setExibirTabela}
                        setModoAlterar={setModoAlterar}
                        setCategoriaSelecionada={setCategoriaSelecionada}
                    /> :
                    <FormCadCategoria
                        listaCategorias={listaDeCategorias}
                        setListaCategorias={setListaDeCategorias}
                        setExibirTabela={setExibirTabela}
                        modoAlterar={modoAlterar}
                        setModoAlterar={setModoAlterar}
                        categoriaSelecionada={categoriaSelecionada}
                        setCategoriaSelecionada={setCategoriaSelecionada}
                    />
                }
            </Pagina>
        </div>
    );
}
