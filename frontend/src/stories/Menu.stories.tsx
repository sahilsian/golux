import Menu from "../components/ui/menu";
import type {Meta, StoryObj} from "@storybook/react";
import MenuNode from "../components/ui/menu/nodes";

const meta = {
    title: 'UI/Menu',
    component: Menu,
    tags: ['autodocs'],
    parameters: {
        layout: 'padded',
    },
    argTypes: {
        backgroundColor: {
            control: 'color',
            description: 'Background color of the menu',
        },
        children: {
            control: false,
            description: 'Menu content (items, categories, etc.)',
        },
    },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic menu with simple text items
export const Default: Story = {
    args: {
        children: (
            <>
                <MenuNode type={"ACTION_NODE"}></MenuNode>
                <MenuNode type={"CATEGORY_NODE"}>

                </MenuNode>
                <MenuNode type={"ACTION_NODE"}></MenuNode>
                <MenuNode type={"CATEGORY_NODE"}></MenuNode>
            </>
        ),
    },
};

// Menu with custom background color
export const CustomBackground: Story = {
    args: {
        children: (
            <>
                <div style={{ padding: '12px 16px', cursor: 'pointer', color: '#fff' }}>Dashboard</div>
                <div style={{ padding: '12px 16px', cursor: 'pointer', color: '#fff' }}>Settings</div>
                <div style={{ padding: '12px 16px', cursor: 'pointer', color: '#fff' }}>Profile</div>
                <div style={{ padding: '12px 16px', cursor: 'pointer', color: '#fff' }}>Logout</div>
            </>
        ),
    },
};

// Empty menu
export const Empty: Story = {
    args: {
        children: null,
    },
};

// Menu with many items (scrollable)
export const ManyItems: Story = {
    args: {
        children: (
            <>
                {Array.from({ length: 20 }, (_, i) => (
                    <div key={i} style={{ padding: '12px 16px', cursor: 'pointer' }}>
                        Menu Item {i + 1}
                    </div>
                ))}
            </>
        ),
    },
};

// Menu with grouped items
export const WithGroups: Story = {
    args: {
        children: (
            <>
                <div style={{ padding: '8px 16px', fontSize: '12px', fontWeight: 'bold', opacity: 0.6 }}>
                    MAIN
                </div>
                <div style={{ padding: '12px 16px', cursor: 'pointer' }}>Dashboard</div>
                <div style={{ padding: '12px 16px', cursor: 'pointer' }}>Analytics</div>

                <div style={{ padding: '8px 16px', fontSize: '12px', fontWeight: 'bold', opacity: 0.6, marginTop: '16px' }}>
                    SETTINGS
                </div>
                <div style={{ padding: '12px 16px', cursor: 'pointer' }}>Profile</div>
                <div style={{ padding: '12px 16px', cursor: 'pointer' }}>Preferences</div>
                <div style={{ padding: '12px 16px', cursor: 'pointer' }}>Security</div>
            </>
        ),
    },
};
