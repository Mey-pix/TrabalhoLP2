import { Alert } from "react-bootstrap";
import Pagina from '../layouts/Pagina'
import { useState } from "react";
import TabelaFornecedor from "./Tabelas/TabelaFornecedor";
import FormCadFornecedor from "./Formularios/FormCadFornecedor";
import { fornecedor } from "../../dados/mockFornecedor";

export default function TelaCadastroFornecedor(props)
{
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaDeFornecedores, setListaDeFornecedores] = useState(fornecedor);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [fornecedorSelecionado, setFornecedorSelecionado] = useState({
        nome:"",
        cnpj:"",
        bairro:"",
        cidade:"",
        rua:"",
        num:"0",
        cep:"",
        tel:"",
        email:""
    });
    return (
        <>
            <Pagina>
                <Alert className="mt-02 mb-02 success text-center" variant="success">
                    <h2>
                        Cadastro de fornecedores
                    </h2>
                </Alert>
                {
                    exibirTabela ? 
                        <TabelaFornecedor listaDeFornecedores={listaDeFornecedores}
                                            setListaDeFornecedores={setListaDeFornecedores}
                                            setExibirTabela={setExibirTabela}
                                            setModoEdicao={setModoEdicao}
                                            setFornecedorSelecionado={setFornecedorSelecionado}/> : 
                        <FormCadFornecedor listaDeFornecedores={listaDeFornecedores}
                                            setListaDeFornecedores={setListaDeFornecedores}
                                            setExibirTabela={setExibirTabela}
                                            fornecedorSelecionado={fornecedorSelecionado}
                                            setFornecedorSelecionado={setFornecedorSelecionado}
                                            modoEdicao={modoEdicao}
                                            setModoEdicao={setModoEdicao}
                        />
                    }
            </Pagina>
        </>
    );

}