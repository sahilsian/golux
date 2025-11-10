export type Font = '1' | '2' | '3' | '4' | '5' | 'p' | '6' | 'button'
const FONT_FAMILY = "'Open Sans', sans-serif";

const createFontStyle = (
    size: string,
    weight: number,
    lineHeight: number
): string => `
  font-family: ${FONT_FAMILY};
  font-size: ${size};
  font-weight: ${weight};
  line-height: ${lineHeight};
`;

const FONT_STYLES_MAP: Record<Font, string> = {
    "1": createFontStyle("3rem", 700, 1.2),
    "2": createFontStyle("2.25rem", 600, 1.3),
    "3": createFontStyle("1.75rem", 600, 1.35),
    "4": createFontStyle("1.25rem", 500, 1.4),
    "5": createFontStyle("1rem", 500, 1.5),
    "6": createFontStyle("0.875rem", 500, 1.5),
    "p": createFontStyle("1rem", 400, 1.6),
    "button": createFontStyle("1rem", 400, 1.6),
};

export const getFontStyles = (value: Font): string => {
    return FONT_STYLES_MAP[value] || "";
};