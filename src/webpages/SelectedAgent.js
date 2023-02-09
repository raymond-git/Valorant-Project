import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SelectedAgent() {
    const [agents, setAgents] = useState([]);
    const { uuid } = useParams();

    useEffect(() => {
        fetch(`https://valorant-api.com/v1/agents/${uuid}`)
            .then((response) => response.json())
            .then((getValorantAgent) => {
                console.log(getValorantAgent.data);
                setAgents([getValorantAgent.data]);
            });
    }, [uuid]);

    return (
        <div>
            {agents.map((agent) => (
                <div key={agent.uuid}>
                    <img src={agent.fullPortraitV2}></img>
                    <p>{agent.description}</p>
                </div>
            ))}
        </div>
    );
}
export default SelectedAgent;