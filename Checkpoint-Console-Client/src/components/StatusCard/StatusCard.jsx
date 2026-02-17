import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
const StatusCard = () => {
  const { token } = useContext(AuthContext);
  const [status, setStatus] = useState({});

  useEffect(() => {
    getStatus()
  },[])
  const getStatus = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/status", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });

      const { status } = await response.json();
      setStatus(status);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h4>Checkpoint Status</h4>
      <span>{status.checkpoint}</span>
      <span>{status.isOpen === true ? "OPEN" : "CLOSED"}</span>
      <span>Traffick Level: {status.trafficLevel}</span>
      <span>Last Update: {status.lastUpdated}</span>
    </div>
  );
};

export default StatusCard;
