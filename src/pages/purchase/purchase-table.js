export default function PurchasedTable({ list }) {
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
                        {list.map((chemical, i) =>
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
