import React, { useEffect, useState } from "react";

function Home() {
    const [agents, setAgents] = useState([]);

    useEffect(() => {
        fetch("https://valorant-api.com/v1/agents")
            .then((response) => response.json())
            .then((getValorantAgent) => {
                setAgents(getValorantAgent.data);
            });
    }, []);

    return (
        <div>
            {/* Need unique id so it knows which agent it belongs to the name and images to each other */}
            {agents.map((agent) => (
                <div key={agent.uuid}>
                    <img src={agent.fullPortraitV2} alt={agent.displayName} />
                    <p>{agent.displayName}</p>
                </div>
            ))}
        </div>
    );
}

export default Home;