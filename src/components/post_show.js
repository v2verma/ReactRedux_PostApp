import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchPost, deletePost} from '../actions';
import {Link } from 'react-router-dom';

class PostShow extends Component {
  componentDidMount(){
    const {id} = this.props.match.params;
    this.props.fetchPost(id);
  }

  onDeleteClick(){
    const {id} = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }

  render(){
    const {post} = this.props;

    if (!post){
      return <div className="container">Loading....</div>
    }
    
    return(
      <div className="container" >
        <div style={{marginTop:'3%'}}>
          <Link to="/">Back</Link>
          <button className="btn btn-danger" style={{float:'right'}} onClick={this.onDeleteClick.bind(this)}>
            DEL
          </button>
          <h4>{this.props.post.title}</h4>
          <h6>Categorie: {this.props.post.categories}</h6>
          <p> {post.content}</p>
        </div>
      </div>
    )
  }
}

function mapStateToProps({posts}, ownProps){
  return {post: posts[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {fetchPost ,deletePost})(PostShow)