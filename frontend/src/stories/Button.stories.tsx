import type {Meta, StoryObj} from "@storybook/react";
import Button from "../components/ui/control/button";
import {Pencil} from "lucide-react";

const meta = {
    title: 'UI/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        variant: 'primary',
        label: "Primary"
    },
};

export const PrimaryIcon: Story = {
    args: {
        variant: 'primary',
        icon: {
            component: <Pencil size={"100%"} />,
            size: "small"
        },
        label: "Primary"

    },
};


export const Secondary: Story = {
    args: {
        variant: 'secondary',
        label: "Secondary"
    },
};

export const SecondaryIcon: Story = {
    args: {
        variant: 'secondary',
        icon: {
            component: <Pencil size={"100%"} />,
            size: "small"
        },
        label: "Secondary"
    },
};
