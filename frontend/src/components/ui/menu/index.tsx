import styled from "styled-components";
import {theme} from "../../../models/theme.ts";
import MenuContainer from "./menuContainer";
import type {ReactNode} from "react";

interface ContainerStyleProps {
    backgroundColor?: string;
}

interface MenuProps {
    backgroundColor?: string;
    children: ReactNode;
}

const BACKGROUND_COLOR = theme.colors.primary;

const Container = styled.div<ContainerStyleProps>`
    width: 100%;
    max-width: 300px;
    background-color: ${props=>props.backgroundColor};
`;

const Header = styled.div`
    flex: 1;
`;


const Menu = ({backgroundColor=BACKGROUND_COLOR, children}:MenuProps) => {
    return (
        <Container
            backgroundColor={backgroundColor}
        >
            <Header>
            </Header>
            <MenuContainer>
                {children}
            </MenuContainer>

        </Container>
    )
}

export default Menu