import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./purchase.css";
import SideMenu from "../../components/side_menu/sideMenu";
import Header from "../../components/header/header";

const Purchase = () => {

    return (
        <>
            <Header />
            <div className="grand-container">
                <SideMenu />
                <section className="purchase-container">
                    <div className="kitchen-done-container">
                        <h1>Pedidos Prontos</h1>
                        <div className="kitchen-done">
                            blbablbea
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Purchase;