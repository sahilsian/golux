import './App.css'
import Button from "./components/ui/control/button";
import {AmbulanceIcon} from "lucide-react";
import useConnect from "./connect/useConnect.ts";
import {useEffect} from "react";

function App() {
    const {connect, connection} = useConnect();
    const handleConnection = () => {
        connect("http://localhost:5073/hub");
    }

    const send = () => {
        console.log("Sending a message");
        connection && connection.send("SendMessage", "SAHIL", "LOL")
    }

    useEffect(() => {
        if (!connection) return;

        const handler = (username: string, message: string) => {
            console.log("📩 Message received:", username, message)
        };

        connection.on("RecieveMessage", handler);

    }, [connection]);

    return (
        <div className='entry'>
            <Button
                variant={"primary"}
                icon={{
                    component: <AmbulanceIcon/>,
                    size: 'medium'
                }}
                onClick={handleConnection}
                label={"Connect"}
            >

            </Button>
            <Button
                variant={"primary"}
                icon={{
                    component: <AmbulanceIcon/>,
                    size: 'medium'
                }}
                onClick={send}
                label={"Send a lol"}
            >

            </Button>
        </div>
    )
}

export default App
