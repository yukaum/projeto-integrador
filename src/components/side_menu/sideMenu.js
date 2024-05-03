import { useEffect, useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import "./sideMenu.css";
import Button from "../button/button";
import { MdWarehouse } from "react-icons/md";
import { IoExitOutline } from "react-icons/io5";
import { HiClipboardDocumentList, HiInboxArrowDown } from "react-icons/hi2";

const SideMenu = () => {
    const location = useLocation();

    useEffect(() => {
        setActive(location.pathname);
        console.log("active: ", active)
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
                        variant="primary"
                        onClick={() => navigateTo("/cadastro")}
                        span="icon"
                        icon={<HiClipboardDocumentList />}
                        children="cadastro"
                        value="/cadastro"
                        active={active}
                    ></Button>
                </div>
            </section >
        </>
    );
};

export default SideMenu;
