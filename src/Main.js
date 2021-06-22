import React, { Component } from 'react'
import HornedBeast from './HornedBeast' 
import {CardColumns} from 'react-bootstrap';
import DataBest from './data.json' 



 class Main extends Component {
  // viewTitle=()=>{
  //   arr.forEach(value =>{
  //     let title =value.title;
  //     return title ;
  //   })
  // }
  
  render() {
    
    
   
    return (
      <div>
        <div>
          
        <CardColumns>
          {DataBest.map((value,index)=>{
            return <HornedBeast title ={value.title} 
            image_url ={value.image_url}
            description={value.description}
            key={index} />
          })}
          </CardColumns>
          </div> 

      
        
        
      </div>
    )
  }
}

export default Main
