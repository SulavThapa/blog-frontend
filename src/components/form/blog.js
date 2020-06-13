import React from 'react';
import { Card } from 'react-bootstrap';
import axios from 'axios';

class PostBlog extends React.Component {

  state={
    title:'',
    name:'',
    first_para:'',
    second_para:'',
    third_para:'',
    fourth_para:''
  }

  handleChange = e =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    axios.post(`http://localhost:5000/blognp`,{
      title:`${this.state.title}`,
      name:`${this.state.name}`,
      first_para:`${this.state.first_para}`,
      second_para:`${this.state.second_para}`,
      third_para:`${this.state.third_para}`,
      fourth_para:`${this.state.fourth_para}`
    },
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=UTF-8'
      },
    }) .then( res => {
      console.log(res);
      console.log(res.data);
    })
    .catch(err => {
      console.log(`This is the ${err} error.`)
    })
  }

  render() {
    return (
      <React.Fragment>
        <Card className="shadow" style={{ margin: 50, padding: 13 }}>
          <h1 style={{ fontFamily: 'courier new', fontWeight: 'bold' }}>Post Blog</h1>
          <form onSubmit={this.handleSubmit}>
            {/* title */}
            <div class="form-group">
              <label for="exampleInputText">Title</label>
              <input type="text" class="form-control" name="title" onChange={this.handleChange} placeholder="Enter title of the blog"></input>
            </div>
            {/* name */}
            <div class="form-group">
              <label for="exampleInputText">Editor Name</label>
              <input type="text" class="form-control" name="name" onChange={this.handleChange} placeholder="Name"></input>
            </div>
            {/* first_paragraph */}
            <div class="form-group">
              <label for="exampleInputText">First Paragraph</label>
              <input type="text" class="form-control"  name="first_para" onChange={this.handleChange} placeholder="First Paragraph (Required)"></input>
            </div>
            {/* second_paragraph */}
            <div class="form-group">
              <label for="exampleInputText">Second Paragraph</label>
              <input type="text" class="form-control" name="second_para" onChange={this.handleChange} placeholder="Second Paragraph (Optional)"></input>
            </div>
            {/* third_paragraph */}
            <div class="form-group">
              <label for="exampleInputText">Third Paragraph</label>
              <input type="text" class="form-control" name="third_para" onChange={this.handleChange} placeholder="Third Paragraph (Optional)"></input>
            </div>
            {/* fourth_paragraph */}
            <div class="form-group">
              <label for="exampleInputText">Fourth Paragraph</label>
              <input type="text" class="form-control" name="fourth_para" onChange={this.handleChange} placeholder="Fourth Paragraph (Optional)"></input>
            </div>
            {/* button to submit */}
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </Card>
      </React.Fragment>
    );
  }
}

export default PostBlog;