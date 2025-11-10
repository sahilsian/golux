import styled from "styled-components";
import {type PropsWithChildren, Suspense} from "react";

const Container = styled.div``;
const MenuContainer = ({children}:PropsWithChildren) => {
    return (
        <Container>
            <Suspense fallback={<div>Loading...</div>} >
                {children}
            </Suspense>
        </Container>
    )
}

export default MenuContainer