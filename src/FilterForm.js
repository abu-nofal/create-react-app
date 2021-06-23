import React, { Component } from 'react'
import { Form,Button } from 'react-bootstrap'
import HornedBeast from './HornedBeast' 
import {CardColumns} from 'react-bootstrap';
import DataBest from './data.json' 





class FilterForm extends Component {
constructor(){
    super();
    this.state={
        NumerOfHorns:' ',
        show:false
    }
}
handleChange=(e)=>{

    this.setState({
        NumerOfHorns:e.target.value
    })
    console.log(e.target.value)
    

}

submitHandled=(e)=>{
    e.preventDefault();
this.setState({
    show:!this.state.show
})
}
    render() {
        return (
            <div>
                        <Form onSubmit={(e)=>{this.submitHandled(e)}}>
                            <Form.Group >
                                <Form.Label>number of horns</Form.Label>
    
                                    <select value={this.state.NumerOfHorns} onChange={(e)=>{this.handleChange(e)}}>
                                            <option value='9'>all</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="100">100</option>
                                    </select>
                                    
     
    
                            </Form.Group>
                            <Button variant="primary" type="submit"> show imges </Button>
                        </Form>

                        

                       
                            
                            
                            <CardColumns>
                            {this.state.show ? 
                            (DataBest 
                            .filter(value=>{
                              return value.horns==this.state.NumerOfHorns
                            })
                            .map((value,index)=>{
                              return <HornedBeast title ={value.title} 
                              image_url ={value.image_url}
                              description={value.description}
                              horns={value.horns}
                              key={index} 
                              />
                            }) ):(DataBest.map((value,index)=>{
                                return <HornedBeast title ={value.title} 
                                image_url ={value.image_url}
                                description={value.description}
                                horns={value.horns}
                                key={index} 
                                />
                              }) )}
                            </CardColumns>
                      

                       
                      
                   
            </div>
        )
    }
}

export default FilterForm

