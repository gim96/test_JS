import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';


export default class ChartTime extends Component{

    constructor(props){
        super(props);
        
        this.state = {

            charData:{

                    labels:[
                        
                        this.props.day_1,
                        this.props.day_2,
                        this.props.day_3,
                        this.props.day_4,
                        this.props.day_5,
                        this.props.day_6,
                        this.props.day_7,
                        this.props.day_8,
                        this.props.day_9,
                        this.props.day_10,
                        this.props.day_11,
                        

                    ],
                        

                    datasets:[
                        
                            {

                                label:'Active',
                                borderWidth: 1,
                                data:
                                    [
                                        this.props.count_2,
                                        this.props.count_2,
                                        this.props.count_3,
                                        this.props.count_4,
                                        this.props.count_5,
                                        this.props.count_6,
                                        this.props.count_7,
                                        this.props.count_8,
                                        this.props.count_9,
                                        this.props.count_10,
                                        this.props.count_11,
                                       
                                        
                                        
                                      
                                      
                                    ],

                                backgroundColor:[
                                    'rgb(214,212,228)',
                                    'rgb(214,212,228)',
                                    'rgb(214,212,228)',
                                    'rgb(214,212,228)',
                                    'rgb(214,212,228)',
                                    'rgb(214,212,228)',
                                    'rgb(214,212,228)',
                                    'rgb(214,212,228)',
                                    'rgb(214,212,228)',
                                    'rgb(214,212,228)',
                                    'rgb(214,212,228)',
                                    'rgb(214,212,228)',
                                ]

                            }
                   
                        ]   

                    }
        }

    }

    render(){

        return(

            <div>
                 
                 <table align='center' width='80%'>
                     <tr>
                         <td>
                         <Bar
            
                             data={this.state.charData}
                             width={100}
                                height={400}
                             options={{
                             maintainAspectRatio: false
                             }}
                         />
                         </td>
                     </tr>
                 </table>
                
              
             
            </div>
        );

    }
}

 