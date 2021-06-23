import React, { Component } from 'react'
import { Card } from 'react-bootstrap';
import SelectedBeast from './SelectedBeast'

class HornedBeast extends Component {
    constructor (props){
        super(props);
        this.state={
            vote:0,
        }
    }
    riseVote=()=>{
        this.setState({
            vote:this.state.vote+1,
        })
    }
    render() {
        return (

            
            <div>

     <Card style={{ width: '18rem' , height:'480px'}}>
     <Card.Img variant="top" src={this.props.image_url} onClick= {this.riseVote} height='250px' />
     <Card.Body>
     <Card.Title>{this.props.title}</Card.Title>
     <Card.Text>
     {this.props.description}
     <p>number of horns: {this.props.horns}</p>
     
     </Card.Text>
     <SelectedBeast title={this.props.title} 
                     description= {this.props.description}
                     image_url={this.props.image_url}
                     vote={this.state.vote}
                     horns={this.props.horns}
                     key='index'/>
    
                     
     <span> <i className="fas fa-heart"> {this.state.vote}</i></span>
      </Card.Body>
      </Card>


                {/* <h2>{this.props.title}</h2>
               <a onClick={this.riseVote}>  <img src={this.props.image_url}  width='300px' height="300px" /></a>
               <span> <i className="fas fa-heart"> {this.state.vote}</i></span>
                <p>{this.props.description} </p> */}
            </div>
        )
    }
}

export default HornedBeast