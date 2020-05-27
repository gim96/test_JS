import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';


export default class ChartLine extends Component{

    constructor(props){
        super(props);
        
        this.state = {

            charData:{

                    labels:['New Cases','Total Cases','Deaths','Recovered'],
                    datasets:[
                        
                            {

                                label:'population',
                                borderWidth: 1,
                                data:
                                    [
                                        this.props.g_newCases,
                                        this.props.g_totCases,
                                        this.props.g_death,
                                        this.props.g_rec
                                      
                                    ],

                                backgroundColor:['rgb(233,114,77)','rgb(146,202,209)','rgb(134,134,134)','rgb((214,215,39)']

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

 