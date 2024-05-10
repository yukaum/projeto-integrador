import Button from "../../components/button/button";
import Input from "../../components/input search/input";
import Search from "../../components/input search/search";

export const ProviderRegisterNav = (props) => {
    return (
        <nav>
            <ul>
                <li>
                    <Button
                        children="+ Novo"
                        variant="secondary"
                        onClick={props.onClick}
                        value="novo-fornecedor"
                        active={props.active}
                    ></Button>
                </li>
                <li>
                    <Button
                        children="Fornecedor"
                        variant="secondary"
                        onClick={props.onClick}
                        value="fornecedor"
                        active={props.active}
                    ></Button>
                </li>
            </ul>
        </nav>
    )
}

export const FormProviderRegister = (props) => {
    return (
        <>
            <form ref={props.formRef} className="register-provider-form">
                <div className="field">
                    <label>Razão Social:</label>
                    <Input></Input>
                </div>

                <div className="field">
                    <label>CNPJ:</label>
                    <Input></Input>
                </div>

                <div className="field">
                    <label>AV./RUA:</label>
                    <Input></Input>
                </div>

                <div className="field">
                    <label>Bairro:</label>
                    <Input></Input>
                </div>

                <div className="field">
                    <label>Cidade:</label>
                    <Input></Input>
                </div>

                <div className="field">
                    <label>Estado:</label>
                    <Input className="small"></Input>
                </div>

                <div className="field">
                    <label>Telefone:</label>
                    <Input></Input>
                </div>

                <div className="field">
                    <label>CEP:</label>
                    <Input></Input>
                </div>
            </form>

            <div className="pad20">
                <Button
                    children="Cadastrar"
                    variant="purple"
                    onClick={props.handleSubmit}

                ></Button>
                <Button
                    children="Limpar"
                    variant="purple"
                    onClick={props.handleCleanForm}
                ></Button>
            </div>
        </>
    )
}

export const ProviderList = (props) => {
    return (
        <>
            <div className="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th className="align-left">#</th>
                            <th className="align-left">Material</th>
                            <th className="align-left">CAS NUMBER</th>
                            <th className="width10">Qtde Entrada</th>
                            <th className="width10">Qtde Saída</th>
                            <th className="width10">Estoque</th>
                            <th className="width10">Acima do permitido Polícia Civil</th>
                            <th className="width10">Abaixo do limite mín</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.list.map((chemical, i) =>
                            <tr key={i}>
                                <td className="align-left">{i + 1}</td>
                                <td className="align-left">{chemical.material}</td>
                                <td className="align-left">{chemical.casnumber}</td>
                                <td className="width10">{chemical.entrada}</td>
                                <td className="width10">{chemical.saida}</td>
                                <td className="width10">{chemical.estoque}</td>
                                <td className="width10">{chemical.permitido}</td>
                                <td className="width10">{chemical.limite}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div >
        </>
    )
}
