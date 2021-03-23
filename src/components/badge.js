import React from "react";
import "./styles/Badge.css";
import confLogo from "../images/badge-header.svg";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src="https://www.gravatar.com/avatar?d=identicon"
            alt="Miguel Aldo Balderrama Vaca"
          />
          <h1>
            Miguel Aldo <br /> Balderrama Vaca
          </h1>
        </div>
        <div className="Badge__section-info">
          <h3>Frontend Egineer</h3>
          <div>@mabalderramav</div>
        </div>

        <div className="Badge__footer">#platziconf</div>
      </div>
    );
  }
}

export default Badge;
