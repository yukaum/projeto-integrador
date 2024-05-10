import Button from "../button/button";
import Input from "./input";
import "./input.css";
import { IoSearchOutline } from "react-icons/io5";

const Search = (props) => {
    const handleSearch = (e) => {
        const flavor = e.target.value.toUpperCase();
    }

    return (
        <div className={props.variant}>
            <Input
                className={props.classInput}
                type="text"
                onChange={handleSearch}
                placeholder="Pesquisar" >
            </Input>

            <Button
                variant="search"
                span="icon-search"
                icon={<IoSearchOutline />}
            ></Button>
        </div>
    );
};

export default Search;


