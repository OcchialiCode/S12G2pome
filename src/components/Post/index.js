import React from "react";
import { withRouter } from "react-router";

class Post extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      post: []
    }
  }

  async componentDidMount() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}?_expand=user`);
    const post = await res.json();

    this.setState({
      post
    });
  }

  render() {
    const { title, body } = this.state.post;

    return (
      <div className="container d-flex justify-content-center">
        <div className="card mt-5">
          <div className="card-title">
            <h2>{title}</h2>
          </div>
          <div className="card-body">
            <p>{body}</p>
          </div>
          {
            this.state.post.user &&
            <div className="card-footer d-flex justify-content-around">
              <div>
                <p>By: {this.state.post.user.name}</p>
              </div>
              <div>
                <p>Mail to: {this.state.post.user.email}</p>
              </div>
            </div>
          }
        </div>
      </div>
    );
  }
}


export default withRouter(Post);