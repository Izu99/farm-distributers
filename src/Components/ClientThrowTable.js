import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";



class CtableRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete(){
        axios.get('http://localhost:4000/client/delete/'+this.props.obj._id)
            .then(this.setState({redirect: true}))
            .catch(err => console.log(err))
        //this.props.history.push('/index');
        alert(" Successfully Deleted....")
        window.location.replace('/AdminClientViewTable');
    }
    render() {
        return (
           <tr>
               
               <td>
                   {this.props.obj.vName}
               </td>
               <td>
                   {this.props.obj.lName}
               </td>
               <td>
                   {this.props.obj.dob}
               </td>
               <td>
                   {this.props.obj.pNumber}
               </td>
               <td>
                   {this.props.obj.uName}
               </td>
               <td>
                   {this.props.obj.password}
               </td>
               <td>
                   {this.props.obj.email}
               </td>
               <td>
                   {this.props.obj.image}
               </td>
             
             
               <td className='profile-actions'>

                   <button><Link to={"/EditClients/"+this.props.obj._id} className="btn btn-success">Edit</Link></button>
                   {/* <br/><br/> */}  &nbsp;
                   <button onClick={this.delete} className="btn btn-danger">Delete</button>
               </td>
           </tr>
        );
    }
}

export default CtableRow;