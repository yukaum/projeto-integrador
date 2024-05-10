

const Nav = (props) => {
    
    return (
    
   
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
    );
  };
  
  export default Nav;