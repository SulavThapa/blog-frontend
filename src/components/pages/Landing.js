import React from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import PostBlog from '../form/blog';

class CardHold extends React.Component {

  state = {
    blog: []
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/blognp`)
      .then(res => {
        this.setState({
          blog: res.data
        })
      })
  }

  handleDelete = _id => {
    axios.delete(`http://localhost:5000/blognp/${_id}`)
    .then(res => {
      window.location.reload(false);
    })
  }

  render() {
    return (
      <React.Fragment>
        <h1 style={{fontFamily: 'courier new', fontWeight: 'bold', textAlign: 'center'}}>BLOG LIST</h1>
        <PostBlog />
        {this.state.blog.map(blog =>
          <Card className="shadow" style={{margin: 50, padding: 13}}>
            <h1 style={{fontFamily: 'courier new', fontWeight: 'bold'}}>{blog.title}</h1>
            <p style={{fontWeight: 'bold', fontFamily: 'courier new'}}>{blog.name}</p>
            <p style={{fontFamily: 'courier new', fontWeight: 'bold'}}>{blog.date}</p>
            <p style={{fontFamily: 'courier new'}}> {blog.first_para}</p>
            <p style={{fontFamily: 'courier new'}}>{blog.second_para}</p>
            <p style={{fontFamily: 'courier new'}}>{blog.third_para}</p>
            <p style={{fontFamily: 'courier new'}}>{blog.fourth_para}</p>
            <Button variant="success">Edit</Button>
            <Button onClick={this.handleDelete.bind(this, blog._id)}
            variant="danger">Delete</Button>
          </Card>
        )}
      </React.Fragment>
    );
  }
}

export default CardHold;