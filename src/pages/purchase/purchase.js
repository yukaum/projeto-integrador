import data from '../../basededados.json';

import { useEffect, useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import "./purchase.css";
import SideMenu from "../../components/side_menu/sideMenu";
import Header from "../../components/header/header";
import Search from "../../components/input search/search";
import Button from "../../components/button/button";
import Input from "../../components/input search/input";
import PurchasedTable from "./purchase-table";

const PurchasePage = () => {

    const purchasedMaterial = data.estoque;

    const [active, setActive] = useState("novo");
    const [purchase, setPurchase] = useState();

    function handleClick(e) {
        // const button = e.target.textContent;
        const buttonValue = e.currentTarget.value;
        setActive(buttonValue);
    }

    function handleCleanForm() {
        document.getElementById("purchase-form").reset();
    }

    function handleSubmit() {
        setPurchase({

        })
    }

    return (
        <>
            <Header />
            <div className="page-container">
                <SideMenu />
                <section className="main-container">
                    <div className="title-container">
                        <h1 className="page-title">Compras</h1>
                    </div>

                    <div className="btn-container">
                        <nav>
                            <ul>
                                <li>
                                    <Button
                                        children="+ Novo"
                                        variant="secondary"
                                        onClick={(e) => handleClick(e)}
                                        value="novo"
                                        active={active}
                                    ></Button>
                                </li>
                                <li>
                                    <Button
                                        children="Entradas"
                                        variant="secondary"
                                        onClick={(e) => handleClick(e)}
                                        value="compras"
                                        active={active}
                                    ></Button>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="main">

                        {active === "novo" ? (
                            <>
                                <form id="purchase-form">
                                    <div className="field">
                                        <label>Identificação:</label>
                                        <Search variant="search-container nopad"></Search>
                                    </div>

                                    <div className="field">
                                        <label>Quantidade:</label>
                                        <Input className="small"></Input>
                                    </div>

                                    <div className="field">
                                        <label>Validade:</label>
                                        <Input placeholder="dd/mm/aa" className="small"></Input>

                                        <label>Data Chegada:</label>
                                        <Input placeholder="dd/mm/aa" className="small"></Input>
                                    </div>

                                    <div className="field">
                                        <label>Lote:</label>
                                        <Input className="small"></Input>

                                        <label>Marca:</label>
                                        <Input className="small"></Input>
                                    </div>

                                    <div className="field">
                                        <label>Nota Fiscal:</label>
                                        <Input></Input>
                                    </div>

                                    <div className="field">
                                        <label>Motivo:</label>
                                        <Input></Input>
                                    </div>

                                    <div className="field">
                                        <label>Preço R$:</label>
                                        <Input></Input>
                                    </div>

                                    <div className="field">
                                        <label>Fornecedor:</label>
                                        <Input></Input>
                                    </div>

                                    <div className="field">
                                        <label>Transportadora:</label>
                                        <Input></Input>
                                    </div>
                                </form>

                                <div className="pad20">
                                    <Button
                                        children="Cadastrar"
                                        variant="purple"
                                        onClick={handleSubmit}

                                    ></Button>
                                    <Button
                                        children="Limpar"
                                        variant="purple"
                                        onClick={handleCleanForm}
                                    ></Button>
                                </div>
                            </>

                        ) : (
                            <>
                                <Search variant="search-container" classInput="search_input"></Search>
                                <PurchasedTable list={purchasedMaterial}></PurchasedTable>
                            </>
                        )}

                    </div>
                </section >
            </div >
        </>
    );
};

export default PurchasePage;