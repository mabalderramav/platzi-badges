import React from "react";
import confLogo from "../images/badge-header.svg";

class Badge extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div>
          <img
            src="https://www.gravatar.com/avatar?d=identicon"
            alt="Miguel Aldo Balderrama Vaca"
          />
          <h1>
            Miguel Aldo <br /> Balderrama Vaca
          </h1>
        </div>
        <div>
          <p>Frontend Egineer</p>
          <p>@mabalderramav</p>
        </div>

        <div>#platziconf</div>
      </div>
    );
  }
}

export default Badge;
