import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";



class PtableRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete(){
        axios.get('http://localhost:4000/product/delete/'+this.props.obj._id)
            .then(this.setState({redirect: true}))
            .catch(err => console.log(err))
        //this.props.history.push('/index');
        alert(" Successfully Deleted....")
        window.location.replace('/AdminProductsViewTable');
    }
    render() {
        return (
           <tr>
               
               <td>
                   {this.props.obj.pName}
               </td>
               <td>
                   {this.props.obj.sLocation}
               </td>
               <td>
                   {this.props.obj.pID}
               </td>
               <td>
                   {this.props.obj.customers}
               </td>
               <td>
                   {this.props.obj.image}
               </td>
             
             
               <td className='profile-actions'>

                   <button><Link to={"/EditProducts/"+this.props.obj._id} className="btn btn-success">Edit</Link></button>
                   {/* <br/><br/> */}  &nbsp;
                   <button onClick={this.delete} className="btn btn-danger">Delete</button>
               </td>
           </tr>
        );
    }
}

export default PtableRow;