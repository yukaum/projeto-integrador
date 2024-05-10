import data from '../../basededados.json';

import "./register.css";
import SideMenu from "../../components/side_menu/sideMenu";
import Header from "../../components/header/header";
import Search from "../../components/input search/search";
import Button from "../../components/button/button";
import Input from "../../components/input search/input";
import { MaterialRegisterNav, FormMaterialRegister, MaterialList } from "./material-tab";
import { ProviderRegisterNav, FormProviderRegister, ProviderList } from "./provider-tab";
import { ShipperRegisterNav, FormShipperRegister, ShipperList } from "./shipper-tab";
import { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from 'react-router-dom';


const RegisterPage = () => {

    const material = data.materiais;
    const provider = data.fornecedores;
    const shipper = data.transportadoras;

    const [active, setActive] = useState("novo-material");
    const [purchase, setPurchase] = useState();

    const [dropdownActive, setDropdownActive] = useState("material");

    useEffect(() => {
        console.log(active);
    }, [active]);

    function handleDropClick(e) {
        const buttonValue = e.currentTarget.value;
        setDropdownActive(buttonValue);
        setActive("novo-" + buttonValue);
    }

    function handleClick(e) {
        const buttonValue = e.currentTarget.value;
        setActive(buttonValue);
    }

    function handleCleanForm() {
        document.getElementById("register-material-form").reset();
    }

    const formRef = useRef();
    const handleResetForm = () => {
        formRef.current.reset();
    };


    function handleSubmit() {
        setPurchase({

        })
    }

    return (
        <>
            <Header />
            <div className="page-container">
                <SideMenu dropClick={handleDropClick} dropdownActive={dropdownActive}></SideMenu>
                <section className="main-container">
                    <div className="title-container">
                        <h1 className="page-title">Cadastro</h1>
                    </div>

                    <div className="btn-container">
                        {
                            {
                                "material":
                                    <MaterialRegisterNav
                                        onClick={handleClick}
                                        active={active}
                                    ></MaterialRegisterNav>,
                                "fornecedor":
                                    <ProviderRegisterNav
                                        onClick={handleClick}
                                        active={active}
                                    ></ProviderRegisterNav>,
                                "transportadora":
                                    <ShipperRegisterNav
                                        onClick={handleClick}
                                        active={active}
                                    ></ShipperRegisterNav>,
                            }[dropdownActive]
                        }
                    </div>

                    <div className="main">
                        {
                            {
                                "novo-material":
                                    <FormMaterialRegister handleSubmit={handleSubmit} handleCleanForm={handleResetForm} formRef={formRef}></FormMaterialRegister>,
                                "material":
                                    <MaterialList list={material}></MaterialList>,
                                "novo-fornecedor":
                                    <FormProviderRegister handleSubmit={handleSubmit} handleCleanForm={handleResetForm} formRef={formRef}></FormProviderRegister>,
                                "fornecedor":
                                    <ProviderList list={provider}></ProviderList>,
                                "novo-transportadora":
                                    <FormProviderRegister handleSubmit={handleSubmit} handleCleanForm={handleResetForm} formRef={formRef}></FormProviderRegister>,
                                "transportadora":
                                    <ShipperList list={shipper}></ShipperList>
                            }[active]
                        }
                    </div>
                </section >
            </div >
        </>
    )
}

export default RegisterPage;