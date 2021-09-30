import React from "react";
import { withRouter } from "react-router";
import PostListRow from "../PostListRow";

class PostList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: []
    }
  }

  componentDidUpdate() {
    console.log(this.state.user);
  }

  async componentDidMount() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}?_embed=posts`);
    const user = await res.json();

    this.setState({
      user
    });
  }

  render() {
      const postList = this.state.user.posts ? this.state.user.posts.map(post => <PostListRow key={post.id} post={post} />) : undefined;
    
    return (
      <div>
        {
          this.state.user.posts &&
          <div>
            <div>
              <h2>Post di: {this.state.user.name}</h2>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>
                {postList}
              </tbody>
            </table>
          </div>
        }
      </div>
    );
  }
}

export default withRouter(PostList);