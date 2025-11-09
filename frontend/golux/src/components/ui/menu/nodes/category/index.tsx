import {type PropsWithChildren} from "react";
import styled from "styled-components";


interface CategoryDecoratorProps {
    children: PropsWithChildren
}
interface ContainerProps {

}

const Container = styled.div<ContainerProps>``;

const CategoryDecorator = ({}:CategoryDecoratorProps) => {
    return (
        <Container>
        </Container>
    )
}

export default CategoryDecorator;