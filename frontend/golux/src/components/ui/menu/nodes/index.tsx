import styled from "styled-components";

const Container = styled.div``;
const MenuAction = styled.div``;

type NODE_TYPE = "ACTION_NODE" | "CATEGORY_NODE";

interface MenuNodeProps {
    type: NODE_TYPE;
}

/*

I want to be able to recursively build the tree from here.
When this

 */

const MenuNode = ({type}:MenuNodeProps) => {

    switch (type) {
        case "ACTION_NODE":
            return <MenuAction></MenuAction>
        case "CATEGORY_NODE":
            return <Container></Container>
    }


}

export default MenuNode