import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import '@coreui/coreui/dist/css/coreui.min.css'
import { Link } from "react-router-dom";

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
        <div className="bg-gray-500">
            {/* Need unique id so it knows which agent it belongs to the name and images to each other */}
            <Carousel>
                {agents.map(agent => (
                    <Carousel.Item key={agent.uuid}>
                        <Carousel.Caption className="h-100">
                            <h3 className="mt-8">{agent.displayName}</h3>
                        </Carousel.Caption>
                        <img
                            className="mx-auto my-10 w-50 block"
                            src={agent.fullPortraitV2}
                            alt={agent.displayName}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
        </div >
    );
}

export default Home;