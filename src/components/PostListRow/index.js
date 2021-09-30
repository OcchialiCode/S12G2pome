import React from "react";
import { Link } from "react-router-dom";

export default class PostListRow extends React.Component {
  render() {
    const { id, title} = this.props.post;

    return (
      <tr>
        <td>
          {id}
        </td>
        <td>
          {title}
        </td>
        <td>
          <Link className="btn btn-primary" to={`/post/${id}`}>Espandi</Link>
        </td>
      </tr>
    );
  }
}
