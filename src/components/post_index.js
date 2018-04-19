import React,{ Component } from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index';
import {Link} from 'react-router-dom';
import _ from 'lodash';
import Add from "material-ui-icons-next/Add";

class PostIndex extends Component {
  componentDidMount(){
    this.props.fetchPosts();
  }

  renderPost(){
    return _.map(this.props.posts, post =>{
      return (
        <li className="list-group-item " key={post.id}>
          <Link to={`/posts/${post.id}`}>
          {post.title}
          </Link>
        </li>
      )
    })
  }

  render(){
    return(
      <div className="container" style={{ marginTop: '3%'}}>
          <div style={{ float: 'right' }}>
          <Link className="btn btn-primary" to="/posts/new"><Add />ADD POST</Link>
          </div>
          <h4>POSTS</h4>
            <ul className="list-group">
            {this.renderPost()}
            </ul>
        </div>
    )
  }
}

function mapStateToProps(state){
  return {posts: state.posts}
}

export default connect(mapStateToProps, { fetchPosts})(PostIndex);