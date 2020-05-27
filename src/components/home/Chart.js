import React, {Component} from 'react';
import {Pie} from 'react-chartjs-2';


export default class Chart extends Component{

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
                                       
                                        ((this.props.g_totCases-this.props.g_death-this.props.g_rec)/(this.props.g_totCases)*100).toFixed(2),
                                        ((this.props.g_death)/(this.props.g_totCases)*100).toFixed(2),
                                        ((this.props.g_rec)/(this.props.g_totCases)*100).toFixed(2)
                                      
                                    ],

                                backgroundColor:['rgb(255, 193, 7 )','rgb(211, 47, 47 )','rgb(139, 195, 74 )']

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

 