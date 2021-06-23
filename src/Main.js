import React, { Component } from 'react'
// import HornedBeast from './HornedBeast' 
// import {CardColumns} from 'react-bootstrap';
// import DataBest from './data.json' 
import FilterForm from './FilterForm';




 class Main extends Component {
  

 
  
  render() {
    
    
   
    return (
      <div>
        <FilterForm/>
        <div>
          
        {/* <CardColumns>
          {DataBest.map((value,index)=>{
            return <HornedBeast title ={value.title} 
            image_url ={value.image_url}
            description={value.description}
            horns={value.horns}
            key={index} 
            />
          })}
          </CardColumns> */}
          </div> 

      
        
        
      </div>
    )
  }
}

export default Main
