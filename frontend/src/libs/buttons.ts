import {theme} from "../models/theme.ts";

export type ButtonType = 'primary' | 'secondary'

const commonStyles = `
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    outline: none;
    display: flex;
    align-items: center;
    gap: 10px
`;

export const getButtonType = (type: ButtonType): string => {
    return {
        "primary": `
            background-color: ${theme.colors.primary};
            color: white;
            &:hover {
                background-color: #0056b3;
            }
            border: none;
            
            ${commonStyles}
        `,
        "secondary": `
            background-color: ${theme.colors.secondary};
            border: 2px solid ${theme.colors.primary};
            color: black;
            &:hover {
                border-color: #0056b3;
            }
            ${commonStyles}
        `
    }[type];
}