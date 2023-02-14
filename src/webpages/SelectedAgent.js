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
        <div>
            {agents.map((agent) => (
                <div key={agent.uuid}>
                    <div className="cont">
                        <div className="imageBorder my-36">
                            <img
                                className="character-animation character md:h-fit"
                                src={agent.fullPortraitV2}
                                alt={agent.displayName}
                            />
                        </div>
                        <div className="descriptionBorder my-36 p-32">
                            {/* <div className="abilities"> */}

                            <div className="row">
                                <img id="iconBorder" src={`https://media.valorant-api.com/agents/${uuid}/abilities/ability1/displayicon.png`} alt={agent.abilities} className="box col-md-2 col-sm-3 col-xs-4"></img>
                                <div className="box2 col-md-10 col-sm-9 col-xs-8">{agent.description}</div>
                            </div>
                            <div className="row">
                                <img id="iconBorder" src={`https://media.valorant-api.com/agents/${uuid}/abilities/ability2/displayicon.png`} alt={agent.abilities} className="box col-md-2 col-sm-3 col-xs-4"></img>
                                <div className="box4 col-md-10 col-sm-9 col-xs-8">{agent.description}</div>
                            </div>
                            <div className="row">
                                <img id="iconBorder" src={`https://media.valorant-api.com/agents/${uuid}/abilities/grenade/displayicon.png`} alt={agent.abilities} className="box col-md-2 col-sm-3 col-xs-4"></img>
                                <div className="box6 col-md-10 col-sm-9 col-xs-8">{agent.description}</div>
                            </div>
                            <div className="row">
                                <img id="iconBorder" src={`https://media.valorant-api.com/agents/${uuid}/abilities/ultimate/displayicon.png`} alt={agent.abilities} className="box col-md-2 col-sm-3 col-xs-4"></img>
                                <div className="box col-md-10 col-sm-9 col-xs-8">{agent.description}</div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default SelectedAgent;