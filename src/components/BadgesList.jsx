import React from "react";
import { Link } from "react-router-dom";

import "./styles/BadgesList.css";

const BadgesList = ({ data }) => {
  return (
    <>
      <div className="Badge__container">
        <div className="Badges__buttons">
          <Link to="/badges/new" className="btn btn-primary">
            New Badge
          </Link>
        </div>
      </div>
      <ul className="BadgesList">
        {data.data.map(badge => {
          return (
            <>
              <li className="BadgesListItem" key={badge.id}>
                <div className="col-4">
                  <img
                    className="BadgesListItem__avatar"
                    src={badge.avatarUrl}
                    alt="Profile"
                  />
                </div>
                <div className="col-8">
                  <Link
                    className="text-reset text-decoration-none"
                    to={`/badges/${badge.id}/edit`}
                  >
                    <p>
                      <h4>
                        {badge.firstName} {badge.lastName}
                      </h4>
                    </p>
                    <p className="text-primary">{badge.twitter}</p>
                    <p>{badge.jobTitle}</p>
                  </Link>
                </div>
              </li>

              <hr />
            </>
          );
        })}
      </ul>
    </>
  );
};
export default BadgesList;
