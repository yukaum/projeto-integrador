import { useEffect, useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import Button from "../button/button";
import "./header.css";

const Header = () => {
    const location = useLocation();

    useEffect(() => {
        setActive(location.pathname);
    }, [location.pathname])

    const [active, setActive] = useState();

    const navigateTo = useNavigate();
    const h1 = <h1>scientia lab</h1>;

    return (
        <>
            <section className="header">
                <div className="title">
                    <Button
                        variant="btn-header"
                        onClick={() => navigateTo("/")}
                        children={h1}
                        active={active}
                    ></Button>
                </div>
            </section >
        </>
    );
};

export default Header;