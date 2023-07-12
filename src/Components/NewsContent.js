// import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class NewsContent extends Component {
 
 
 
  render() {
    let {title, description, imgurl , newsurl , author} = this.props
    return (
      <div>
        <div className="card text-white bg-dark mb-3"    data-aos="fade-up"
    data-aos-offset="300"
    data-aos-delay="400"
    data-aos-duration="1000">
      <img className="card-img-top" src ={!imgurl?"https://media.istockphoto.com/id/1128119311/photo/cubes-with-the-word-news-on-a-newspaper.jpg?b=1&s=612x612&w=0&k=20&c=AUpepbnMhzMFfCpJTKqoC4fKn48prR39X5AqYNdaHk0=":imgurl} alt="Card image cap"/>
      <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{description}...</p>
        <p className="card-text">by {!author?"unknown":author}</p>
        <a href={newsurl}  target= "_blank" className="btn btn-sm btn-primary">read more</a>
      </div>
    </div>
 
    
    </div>
    )
  }
}

export default NewsContent