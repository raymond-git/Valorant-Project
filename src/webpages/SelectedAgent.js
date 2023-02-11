import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import '@coreui/coreui/dist/css/coreui.min.css'

function SelectedAgent() {
    const [agents, setAgents] = useState([]);
    const { uuid } = useParams();

    useEffect(() => {
        fetch(`https://valorant-api.com/v1/agents/${uuid}`)
            .then((response) => response.json())
            .then((getValorantAgent) => {
                setAgents([getValorantAgent.data]);
            });
    }, [uuid]);

    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            {agents.map((agent) => (
                <div key={agent.uuid}>
                    <div className="wrap2">
                        <img
                            className="bg-color character-animation object-contain w-50"
                            src={agent.fullPortraitV2}
                            alt={agent.displayName}
                        />
                    </div>
                    <div className="wrap">
                        <div>hello world</div>
                    </div>

                </div>
            ))}
        </div>
    );
}
export default SelectedAgent;