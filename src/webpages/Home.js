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

        <div>
            {/* Need unique id so it knows which agent it belongs to the name and images to each other */}
            <Carousel>
                {agents.map((agent) => (
                    <Carousel.Item key={agent.uuid}>
                        <Link to={`/${agent.uuid}`}>
                            <Carousel.Caption className="h-100">
                                <h3 className="mt-8 font-weight: 800 text-5xl text-animation">{agent.displayName}</h3>
                            </Carousel.Caption>
                            <img
                                className="mx-auto my-8 w-50 block character-animation"
                                src={agent.fullPortraitV2}
                                alt={agent.displayName}
                            />
                        </Link>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div >
    );
}

export default Home;