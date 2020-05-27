import React, {Component} from 'react';
import {Pie} from 'react-chartjs-2';


export default class ChartLocal extends Component{

    constructor(props){
        super(props);
        
        this.state = {

            charData:{

                    labels:['Active Cases (%)','Deaths (%)','Recovered (%)'],
                    datasets:[
                        
                            {

                                label:'population',
                                borderWidth: 1,
                                data:
                                    [
                                
                                        ((this.props.l_totCases-this.props.l_death-this.props.l_rec)/ (this.props.l_totCases)*100).toFixed(2),
                                        ((this.props.l_death)/ (this.props.l_totCases)*100).toFixed(2),
                                        ((this.props.l_rec)/ (this.props.l_totCases)*100).toFixed(2)
                                      
                                    ],

                                backgroundColor:['rgb(0, 191, 255)','rgb(0, 64, 255)','rgb(255, 0, 64)','rgb(255, 255, 0)']

                            }
                   
                        ]   

                    }
        }

    }

    render(){

        return(

            <div>

            
                <Pie
                
                    data={this.state.charData}
                    width={100}
                     height={250}
                    options={{
                        maintainAspectRatio: false
                    }}
                 />
             
            </div>
        );

    }
}
 