import styled from "styled-components";
import * as React from "react";

type Sizes = "small" | "medium" | "large"

interface ContainerProps {
    width: number;
    height: number;
}

const Container = styled.div<ContainerProps>`
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    margin-bottom: 4px;
`

interface IconProps {
    icon: React.ReactElement;
    size?: Sizes;
}

const Icon = ({icon, size = "medium"}: IconProps) => {
    if (!React.isValidElement(icon)) {
        console.error('Icon must be a valid React element');
        return null;
    }

    const iconSize = size === "small" ? 16 : size === "medium" ? 24 : 32;

    return <Container width={iconSize} height={iconSize}>{icon}</Container>;
}

export default Icon