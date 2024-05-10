import "./sideMenu.css";
import Button from "../button/button";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { MdWarehouse } from "react-icons/md";
import { IoExitOutline } from "react-icons/io5";
import { HiClipboardDocumentList, HiInboxArrowDown } from "react-icons/hi2";
import { RiArrowDropDownLine } from "react-icons/ri";

const SideMenu = (props) => {
    const location = useLocation();

    useEffect(() => {
        setActive(location.pathname);
    }, [location.pathname])

    const [active, setActive] = useState();
    const navigateTo = useNavigate();

       return (
        <>
            <section className="side-menu">
                <div className="button-container">
                    <Button
                        variant="primary"
                        onClick={() => navigateTo("/")}
                        span="icon"
                        icon={<MdWarehouse />}
                        children="estoque"
                        value="/"
                        active={active}
                    ></Button>

                    <Button
                        variant="primary"
                        onClick={() => navigateTo("/compras")}
                        span="icon"
                        icon={<HiInboxArrowDown />}
                        children="compras"
                        value="/compras"
                        active={active}
                    ></Button>

                    <Button
                        variant="primary"
                        onClick={() => navigateTo("/saida")}
                        span="icon"
                        icon={<IoExitOutline />}
                        children="saída"
                        value="/saida"
                        active={active}
                    ></Button>

                    <Button
                        variant="primary drop"
                        onClick={() => navigateTo("/cadastro")}
                        span="icon"
                        icon={<HiClipboardDocumentList />}
                        children= "cadastro"
                        value="/cadastro"
                        active={active}
                    ></Button>

                    {active === "/cadastro" ? (
                        <div className="button-container dropdown">
                            <Button
                                children="material"
                                variant="tertiary"
                                onClick={props.dropClick}
                                value="material"
                                active={props.dropdownActive}
                            ></Button>

                            <Button
                                children="fornecedor"
                                variant="tertiary"
                                onClick={props.dropClick}
                                value="fornecedor"
                                active={props.dropdownActive}
                            ></Button>

                            <Button
                                children="transportadora"
                                variant="tertiary"
                                onClick={props.dropClick}
                                value="transportadora"
                                active={props.dropdownActive}
                            ></Button>

                        </div>
                    ) : (<></>)}
                </div>
            </section >
        </>
    );
};

export default SideMenu;
