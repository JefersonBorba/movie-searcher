import React from "react";
import {Container, Categories, Input} from "./style"

const Header = () => {
    return <Container>
        <Categories>
            <h2>Action</h2>
            <h2>Drama</h2>
            <h2>Thriller</h2>
            <h2>Adventure</h2>
            <h2>Horror</h2>
        </Categories>
        <Input>
            <input type="text" placeholder="search"/>
            <i className="fas fa-search"></i>
        </Input>
    </Container>;
}

export default Header;