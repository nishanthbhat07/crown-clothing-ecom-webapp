import React, { Component } from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";
import data from "./10.1 directory.data.js.js";
class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: data,
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, size, id }) => (
          <MenuItem key={id} title={title} size={size} imageUrl={imageUrl} />
        ))}
      </div>
    );
  }
}
export default Directory;
