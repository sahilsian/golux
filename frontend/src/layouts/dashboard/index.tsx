import styled from "styled-components";
import Typography from "../../components/ui/typography";
import type { PropsWithChildren } from "react";
import type { baseWebEvent } from "../../models/webEvents/baseWebEvent";

interface DashboardProps extends PropsWithChildren {
    event?: baseWebEvent;
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
`;

const Dashboard = ({ event, children }: DashboardProps) => {
    console.log("🧭 Dashboard event:", event);
    return (
        <Container>
            <Typography value="Hello World" />
            {children}
        </Container>
    );
};

export default Dashboard;
