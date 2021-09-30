import React from "react";
import UserListRow from "../UserListRow";

export default class UserList extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      users: []
    };
  }

  async componentDidMount() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();

    this.setState({
      users
    });
  }

  render() {
    const userList = this.state.users.map(user => <UserListRow key={user.id} user={user} />)

    return(
      <div>
        <div>
          <h2>
            Utenti
          </h2>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Post</th>
            </tr>
          </thead>
          <tbody>
          {userList}
          </tbody>
        </table>
      </div>
      
    );
  }
}