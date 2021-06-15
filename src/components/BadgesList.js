import React from "react";

import "./styles/BadgesList.css";

class BadgesList extends React.Component {
  render() {
    return (
      <ul className="BadgesList">
        {this.props.badges.map((badge) => {
          return (
            <li className="BadgesListItem" key={badge.id}>
              <img
                className="BadgesListItem__avatar"
                src={badge.avatarUrl}
                alt={badge.firstName}
              />
              <div>
                {badge.firstName} {badge.lastName}
              </div>
              <div>{badge.jobTitle}</div>
              <div>@{badge.twitter}</div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
