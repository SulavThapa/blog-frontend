import React from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';

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

  render() {
    return (
      <React.Fragment>
        {this.state.blog.map(blog =>
          <Card style={{margin: 50}}>
            <h1>{blog.title}</h1>
            <p>{blog.name}</p>
            <p>{blog.date}</p>
            <p>{blog.first_para}</p>
            <p>{blog.second_para}</p>
            <p>{blog.third_para}</p>
            <p>{blog.fourth_para}</p>
            <Button variant="success">Edit</Button>
            <Button variant="danger">Delete</Button>
          </Card>
        )}
      </React.Fragment>
    );
  }
}

export default CardHold;