import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';


export default class ChartLineLocal extends Component{

    constructor(props){
        super(props);
        
        this.state = {

            charData:{

                    labels:['New','Active','Deaths','Recovered'],
                    datasets:[
                        
                            {

                                label:'All cases',
                                borderWidth: 1,
                                data:
                                    [
                                        this.props.l_newCases,
                                        this.props.l_totCases,
                                        this.props.l_death,
                                        this.props.l_rec
                                      
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

            
                <Bar
                
                    data={this.state.charData}
                    width={100}
                     height={400}
                    options={{
                        maintainAspectRatio: false
                    }}
                 />
             
            </div>
        );

    }
}
 