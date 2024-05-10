import data from '../../basededados.json';

import { useState } from "react";
import { useHistory } from "react-router-dom";
import SideMenu from "../../components/side_menu/sideMenu";
import Header from "../../components/header/header";
import Search from "../../components/input search/search";
import MaterialList from "./storage_item";

const StoragePage = () => {

  const storage = data.estoque;

  return (
    <>
      <Header />
      <div className="page-container">
        <SideMenu />
        <section className="main-container">
          <div className="title-container">
            <h1 className="page-title">Estoque</h1>
          </div>

          <hr></hr>

          <div className="main">
            <Search variant="search-container nopad"></Search>

            <MaterialList list={storage}></MaterialList>


          </div>
        </section>
      </div>
    </>
  );
};

export default StoragePage;
