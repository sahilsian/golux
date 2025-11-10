import Typography from "../components/ui/typography";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: 'UI/Typography',
    component: Typography,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Typography>

export default meta;
export type Story = StoryObj<typeof meta>;
export const Heading1: Story = {
    args: {
        value: "The Quick Brown Fox",
        level: "1"
    }
}

export const Heading2: Story = {
    args: {
        value: "The Quick Brown Fox",
        level: "2"
    }
}

export const Heading3: Story = {
    args: {
        value: "The Quick Brown Fox",
        level: "3"
    }
}

export const Heading4: Story = {
    args: {
        value: "The Quick Brown Fox",
        level: "4"
    }
}

export const Heading5: Story = {
    args: {
        value: "The Quick Brown Fox",
        level: "5"
    }
}


export const Heading6: Story = {
    args: {
        value: "The Quick Brown Fox",
        level: "6"
    }
}

export const Paragraph: Story = {
    args: {
        value: "The Quick Brown Fox",
        level: "p"
    }
}