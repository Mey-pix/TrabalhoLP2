import Pagina from '../layouts/Pagina';
import TabelaCategorias from './Tabelas/TabelaCategorias';
import FormCategoria from './Formularios/FormCadCategoria'
import { Alert } from "react-bootstrap";
import { useState } from "react";
import { categoria } from '../../dados/mockCategorias';

export default function TelaCadastroCategoria(props) 
{
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaDeCategorias, setListaDeCategorias] = useState(categoria);
    const [modoEdicao, setModoEdicao] = useState(false);
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
                        setmodoEdicao={setModoEdicao}
                        setCategoriaSelecionada={setCategoriaSelecionada}
                    /> :
                    <FormCategoria
                        listaCategorias={listaDeCategorias}
                        setListaCategorias={setListaDeCategorias}
                        setExibirTabela={setExibirTabela}
                        modoEdicao={modoEdicao}
                        setmodoEdicao={setModoEdicao}
                        categoriaSelecionada={categoriaSelecionada}
                        setCategoriaSelecionada={setCategoriaSelecionada}
                    />
                }
            </Pagina>
        </div>
    );
}
