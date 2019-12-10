import React from "react";
import confLogo from "../images/badge-header.svg";
import "./styles/Badge.css";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge_header">
          <img src={confLogo} alt=""></img>
        </div>
        <div className="Badge_section-name">
          <img
            className="Badge_avatar"
            src="https://www.gravatar.com/avatar?d=identicon"
            alt="Avatar"
          />
          <h1>
            {this.props.firstName}
            <br />
            {this.props.lastName}
            <br />
            {this.props.email}
          </h1>
        </div>
        <div className="Badge_section-info">
          <h3> {this.props.jobTitle}</h3>
          <div> {this.props.twitter}</div>
        </div>
        <div className="Badge__footer">#PlatziConf</div>
      </div>
    );
  }
}
export default Badge;
