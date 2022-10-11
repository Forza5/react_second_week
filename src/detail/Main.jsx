import React from "react";
import Header from '../components/header/Header';
import AddForm from "../components/form/Form";
import List from "../components/list/List";
import styled from "styled-components";

const Layout = styled.div`
  width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`

const Main = () => {
    return(
        <Layout>
            <Header />
            <AddForm />
            <List />
        </Layout>
    )
}

export default Main;