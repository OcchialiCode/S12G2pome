import React from "react";
import { Link } from "react-router-dom";

export default class UserListRow extends React.Component {
  render() {
    const {id,name,email} = this.props.user;

    return (
      <tr>
        <td>
          {id}
        </td>
        <td>
          {name}
        </td>
        <td>
          {email}
        </td>
        <td>
          <Link className="btn btn-primary" to={`/user/${id}/posts`}>Post</Link>
        </td>
      </tr>
    );
  }
}

