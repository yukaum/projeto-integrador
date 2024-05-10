import Button from "../../components/button/button";
import Input from "../../components/input search/input";
import Search from "../../components/input search/search";

export const MaterialRegisterNav = (props) => {
    return (
        <nav>
            <ul>
                <li>
                    <Button
                        children="+ Novo"
                        variant="secondary"
                        onClick={props.onClick}
                        value="novo-material"
                        active={props.active}
                    ></Button>
                </li>
                <li>
                    <Button
                        children="Material"
                        variant="secondary"
                        onClick={props.onClick}
                        value="material"
                        active={props.active}
                    ></Button>
                </li>
            </ul>
        </nav>
    )
}

export const FormMaterialRegister = (props) => {
    return (
        <>
            <form ref={props.formRef} className="register-material-form">
                <div className="field">
                    <label>Nome do Material:</label>
                    <Input></Input>
                </div>

                <div className="field">
                    <label>CAS NUMBER:</label>
                    <Input className="small"></Input>
                </div>

                <div className="field">
                    <label>NCM</label>
                    <Input className="small"></Input>
                </div>

                <div className="field">
                    <label>Classificação:</label>
                    <Input className="small"></Input>
                </div>


                <div className="field">
                    <label>Unidade:</label>
                    <Input className="small"></Input>
                </div>

                <div className="field">
                    <label>Estoque mínimo:</label>
                    <Input></Input>
                </div>

                <div className="field">
                    <label>Compra programada:</label>
                    <select id="select" className="select-scheduled">
                        <option value="" className="none"></option>
                        <option value="sim" id="yes">sim</option>
                        <option value="não" id="no">não</option>
                    </select>

                </div>

                <div className="field">
                    <label>Reagente controlado:</label>

                    <div className="checkbox-container" >
                        <Input type="checkbox" id="exercito" value="exercito"></Input>
                        <label for="exercito">Exército</label>
                        <Input type="checkbox" id="pf" value="pf"></Input>
                        <label for="pf">Polícia Federal</label>
                        <Input type="checkbox" id="pc" value="pc"></Input>
                        <label for="pc">Polícia Civil</label>
                    </div>
                </div>

                <div className="field">
                    <label className="long-label">Quantidade permitida pela Polícia Civil:</label>
                    <Input className="small"></Input>
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

export const MaterialList = (props) => {
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
