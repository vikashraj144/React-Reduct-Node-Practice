import React,{Component} from 'react';

class Home extends Component {
    constructor(props){
        super(props);
    }

    // load all data in store
    componentDidMount = () =>{
        // this.props.loadAllData({id:12,name:'vikask'});
    }

    render(){
        return(
            <div>
                Home
            </div>
        );
    }
}

export default Home;