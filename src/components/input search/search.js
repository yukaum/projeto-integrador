import Button from "../button/button";
import Input from "./input";
import "./input.css";
import { IoSearchOutline } from "react-icons/io5";

const Search = (props) => {
    const handleSearch = (e) => {
        const flavor = e.target.value.toUpperCase();
        // const dadosFiltrados = filterDataNome(champs, "name", textoDigitado)
        // setValue({ ...value, sabor: flavor });


        // const textoDigitado = document.getElementById("campoPesquisar").value.toUpperCase();



        // const caixaPesquisa = document.getElementById("campoPesquisar");
        // caixaPesquisa.scrollIntoView();

        // cards(dadosFiltrados);

        // // CRIADO BOTÃO VOLTAR (APARECER SÓ QUANDO FILTRAR)
        // const botaoVoltar = document.createElement('button');
        // botaoVoltar.setAttribute('class', 'btnVoltar');
        // botaoVoltar.addEventListener("click", voltarCard);
        // botaoVoltar.innerHTML = "Voltar";
        // document.getElementById('cardContainer').appendChild(botaoVoltar);

    }

    return (
        <div className="search-container">
            <Input
                class="search_input"
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


