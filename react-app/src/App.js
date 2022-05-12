
import './App.css';
import { React, Component } from 'react';
import {Form,Button} from 'react-bootstrap'
class App extends Component {
  constructor(){
    super();
    this.state = {
     act : 0,
      idx : '',
      datas : []
    }
  }

  componentDidMount(){
    this.refs.txtName.focus();
  }

  handleSubmit=(e)=>{
    e.preventDefault();
    let datas = this.state.datas;
    let name = this.refs.txtName.value;
    let capacity = this.refs.txtCapacity.value;
    let file =this.refs.txtFile.value;
    if(this.state.act === 0)
    {
      let data = {
        "name" : name,
        "capacity" : capacity,
        "file" :file
      }
      datas.push(data);
    }
    else
    {
        let index = this.state.idx;
        datas[index].name = name;
        datas[index].capacity = capacity;
        datas[index].file=file;        
    }
    
    
    this.setState({
      datas : datas,
      act : 0
    })
    this.refs.myForm.reset();
    this.refs.txtName.focus();
  }

  handleDelete = (index) =>{
    let datas = this.state.datas;
    datas.splice(index,1);
    this.setState({
      datas:datas
    })
    this.refs.txtName.focus();
  }

  handleEdit = (index) => {
    let data = this.state.datas[index];
    this.refs.txtName.value = data.name;
    this.refs.txtCapacity.value = data.capacity;
    this.refs.txtFile.value =data.file;
    this.setState({
      act: 1,
      idx : index
    })
    //console.log(data);
  }
  
  render() { 
    let datas = this.state.datas;
    return ( 
      <div className="App">
      
        <Form ref="myForm" className="myForm">
        <h1>{this.state.title}</h1>
        <h5 className='heading'>Create table</h5>
        <Form.Group className="mb-3">
       <Form.Label>Layout</Form.Label>
      <Form.Select>
      <option>Select Layout</option>
       </Form.Select>
       </Form.Group>
       <Form.Group className="mb-3">
          <label>Name:</label>
          <input type="text" ref="txtName" placeholder="Enter name" className="formField"/>
          </Form.Group>
          <Form.Group className="mb-3">
          <label>Capacity:</label>
           <input type="text" ref="txtCapacity" placeholder="Enter capacity"  className="formField"/>
           </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Label>Status </Form.Label>&nbsp;&nbsp;
      <input type="checkbox" />
      </Form.Group>
      <Form.Group className="mb-3">
       <Form.Label>Image:</Form.Label>&nbsp;&nbsp;
       <input type="file" ref="txtFile" />
         </Form.Group>
         <div className='button'>
          <Button onClick={e => this.handleSubmit(e)} className="myButton"> Create Table</Button>&nbsp;&nbsp;
          <Button variant="danger" type="submit">
               Cancle
              </Button>
              </div>
        </Form>

        
        <pre className="listView">
        <table className='table'>
        
          <tr>
          <th>S.No</th>
            <th>Name</th>
            <th>capacity</th>
            <th>Image</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        
          {datas.map((data,index)=>
          <tr key={index}>
          <td>{index+1}</td>
          <td>{data.name}</td>
          <td>{data.capacity}</td>
          <td>{data.file}</td>
          <td><button onClick={e => this.handleDelete(index)} className="myListButton">Delete</button></td>
          <td><button onClick={e => this.handleEdit (index)} className="myListButton">Edit</button></td>

          </tr>           
        
            )
          }
          </table>
        </pre>
      </div>
     );
  }
}
 
export default App;

    


