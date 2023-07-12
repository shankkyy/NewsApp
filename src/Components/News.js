import PropTypes from 'prop-types'
import React, { Component } from 'react'
import NewsContent from './NewsContent'

export class News extends Component {
static defaultProps ={
  country : "in",
  category : "general"
}

static propTypes = {
  country : PropTypes.string,
  category : PropTypes.string
}
 
 articles =[]
constructor(){
super();
console.log("this is a new const")
 this.state = {
    articles : this.articles,
    page : 1,
    category : this.category
 }
}

 async componentDidMount(){
console.log("this is a new component did mount")

let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4084ff505f5e48a0a2052d0a0964467d`;
 let data = await fetch(url);
let parsedData = await data.json();
 console.log(parsedData)
 this.setState({articles : parsedData.articles})
}

handleprev=()=>{
  console.log("prev")

};
handlenext=()=>{
  console.log("next")
}

  render() {
   
    return (
  <div >
       <div className='row mx-5 my-3'>
     
        { this.state.articles && this.state.articles.map((element)=>{ 
          return  <div className='col-md-4'  key={element.url}>
        <NewsContent title ={element.title?element.title.slice(0, 44) : ""} description ={element.description?element.description.slice(0,65): ""} imgurl ={element.urlToImage} newsurl ={element.url} author={element.author}/></div>
      
      })}
      
       </div>
    </div>
    )
  }
}

export default News