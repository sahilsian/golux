import './App.css'
import Button from "./components/ui/control/button";
import {AmbulanceIcon} from "lucide-react";
import useSystem from "./hooks/useSystem.ts";
import {useEffect} from "react";
function App() {
    const {status, createConnection} = useSystem();

    useEffect(() => {
        console.log("Status changed to", status);
        if (status === "idle") {
            createConnection("http://localhost:5073/hub");
        }
    }, [status]);

    return (
        <div className='entry'>
            <Button
                variant={"primary"}
                icon={{
                    component: <AmbulanceIcon/>,
                    size: 'medium'
                }}
                label={"Connect"}
            >

            </Button>
            <Button
                variant={"primary"}
                icon={{
                    component: <AmbulanceIcon/>,
                    size: 'medium'
                }}
                label={"Send a lol"}
            >

            </Button>
        </div>
    )
}

export default App
