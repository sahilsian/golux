import styled from 'styled-components'
import { getFontStyles, type Font } from '../../../libs/fonts';
import OpenSans from '../../../assets/fonts/OpenSans-VariableFont_wdth,wght.ttf'

type alignments = "left" | "center" | "right" | "justify"

interface TypographyProps {
    value: string,
    level?: Font,
    alignment?: alignments,
}

interface TypographyStyleProps {
    level: Font,
    alignment: alignments
}

const Container = styled.div`
`;

const StyledTypography = styled.div<TypographyStyleProps>`
    ${props=> getFontStyles(props.level)}
    text-align: ${props=>props.alignment}
`;

const Typography = (
    {
        value = "This is a default value.", 
        level = "p",
        alignment = "left" 
    }:TypographyProps,
       
    ) => {
    return (
        <Container>
            <StyledTypography 
            level={level}
            alignment={alignment}
            >
                {value}
            </StyledTypography>
        </Container>
    )
}
export default Typography

export const InterFontFace = `
  @font-face {
    font-family: 'OpenSans';
    src: url(${OpenSans}) format('woff2');
    font-weight: normal;
    font-style: normal;
  }
`;
