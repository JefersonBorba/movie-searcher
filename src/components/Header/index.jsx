import React from "react";
import {Container, InnerLeftContainer, InnerRightContainer, Sandwich} from "./style"

const Header = () => {
    return <Container >
        <InnerLeftContainer>
            <h2>MOVIESEARCHER.<span>COM</span></h2>
            <input type="text" placeholder="Search for Movies, TV Series, Celebrities &amp; More"/>
        </InnerLeftContainer>
        <InnerRightContainer>
            <h3>Login</h3>
            <h3>Register</h3>
            <Sandwich>
                <i class="fa fa-bars" aria-hidden="true"></i>
            </Sandwich>
        </InnerRightContainer>
    </Container>;
}

export default Header;