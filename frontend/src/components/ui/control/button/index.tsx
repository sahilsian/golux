import styled from "styled-components";
import Icon from "../../Icon";
import Typography from "../../typography";
import {type ButtonType, getButtonType} from "../../../../libs/buttons.ts";

interface ContainerProps {
    variant: ButtonType
}

interface ButtonProps {
    variant: ButtonType
    onClick?: () => void
    icon?: {
        component: React.ReactElement<React.SVGProps<SVGSVGElement>>,
        size: "small" | "medium" | "large"
    } | null
    label: string
}

const Container = styled.button<ContainerProps>`
    ${props=>getButtonType(props.variant)}
`;

const Button = ({variant, onClick, icon, label="Button"}:ButtonProps) => {
    return (
    <Container
        variant={variant}
        onClick={onClick}
    >
        {icon && <Icon size={icon.size} icon={icon?.component}></Icon>}
        <Typography value={label} />
    </Container>
    )
}

export default Button