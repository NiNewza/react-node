import React, { Component } from 'react';
import logo from './logo.svg';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeAdd: false,
      newUser: false,
      newValue: [],
      user: [
        {
          nameChange: "Mr.A",
          ageChange: "37",
          nicknameChange: "A",
          readonly: true
        }, 
        {
          nameChange: "Mr.B",
          ageChange: "22",
          nicknameChange: "B",
          readonly: true
        } 
      ]      
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  handleClick(e) {
    this.setState({
      activeAdd: true,
    });
  }
  handleCancel(e){
    this.setState({
      activeAdd: false,
      newUser: false,
    });
  }
  deleteUser(e){    
    for(var i = 0; i < this.state.user.length; i++){
      if(this.state.user[i] === e){
        delete this.state.user[i]
      }
    }
    this.setState({
      value:this.state.user
    })
  }
  addRow(e){  
    return(
      <tr className="row-add">
        <td>
          <input 
            type="text"
            name="nameChange"
            onChange={this.handleInputChange} placeholder="Name"
            autoComplete="off"
          />
        </td>
        <td>
          <select 
            name="ageChange"
            onChange={this.handleInputChange}
          >
            <option>Age</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
            <option value="32">32</option>
            <option value="33">33</option>
            <option value="34">34</option>
            <option value="35">35</option>
            <option value="36">36</option>
            <option value="37">37</option>
            <option value="38">38</option>
            <option value="39">39</option>
            <option value="40">40</option>
          </select>
        </td>
        <td>
          <input
            type="text"
            name="nicknameChange"
            onChange={this.handleInputChange} placeholder="Nickame"
            autoComplete="off"
          />
        </td>
        <td>
          <input type="button" className="btn-save" value="Save" onClick={this.handleSubmit}/>
          <input type="button" className="btn-cancel" value="Cancel" onClick={this.handleCancel}/>
        </td>
      </tr>
    )
  }
  addUser(e) {        
    return (
      <tr key={this.state.user}>
        <td>
          <input 
            type="text" 
            name="nameChange"
            onChange={this.handleInputChange}
            defaultValue={this.state.user.nameChange}
            readOnly={this.state.user.readonly}
            autoComplete="off"
            /> 
        </td>
        <td>
          <input 
            type="text" 
            className={this.state.user.readonly ? "" : "hide"}
            name="ageChange"
            value={this.state.user.ageChange}
            readOnly
            />
          <select 
            className={this.state.user.readonly ? "hide" : ""} name="ageChange" 
            onChange={this.handleInputChange}
            defaultValue={this.state.user.ageChange}
          >
            <option>Age</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
            <option value="32">32</option>
            <option value="33">33</option>
            <option value="34">34</option>
            <option value="35">35</option>
            <option value="36">36</option>
            <option value="37">37</option>
            <option value="38">38</option>
            <option value="39">39</option>
            <option value="40">40</option>
          </select>
        </td>
        <td>
          <input 
            type="text" 
            name="nicknameChange"
            onChange={this.handleInputChange}
            defaultValue={this.state.user.nicknameChange}
            readOnly={this.state.user.readonly}
            autoComplete="off"
            /> 
        </td>
        <td>
          <input type="button" className="btn-edit" value="Edit" onClick={() => this.editClick(this.state.user)}/>
          <input type="button" className="btn-del" onClick={this.deleteUser(this.state.user)} value="Edit" />
        </td>
      </tr>
    );   
  }
  handleInputChange(e) {
    let newValue = this.state.newValue
    let name = e.target.name
    let value = e.target.value
    newValue[name] = value
  }
  editClick(key) {
    let user = this.state.user[key]
    let olduser = {...user}
    let edit = user.readonly
    let newState = Object.assign({}, this.state)
    let newValue = this.state.newValue
    if(edit) {
      newState.user[key].readonly = false  
    }
    else {  
      const updateState = {...olduser, ...newValue, readonly: true};
      user = updateState
      newState.user[key] = user
      console.log(this.state.user)  
    }
    this.setState(newState)
  }
  handleSubmit(e){    
    const readState = {...this.state.newValue, readonly: true};
    this.state.user.push(readState)
    this.setState({
      activeAdd: false,
      newUser: false,
      newValue: [],
    });
    console.log(this.state.user)
  }
  render() {
    return (
      <div className="inner-app">
        <header className="header">
          <img src={logo} className="logo" alt="logo" />
          <h1 className="title">Welcome to Pretest</h1>
          <p>By Piyanuch Na Takuatung</p>
        </header>
        <div className="container">
          <h2>User Form</h2>
          <table className="table">
            <thead>
              <tr>
                <th>
                  Name
                </th>
                <th>
                  Age
                </th>
                <th>
                  Nickname
                </th>
                <th>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>              
              {this.state.user.map((user, index) =>       
                <tr key={index}>
                  <td>                  
                    <input 
                      type="text" 
                      name="nameChange"
                      onChange={this.handleInputChange}
                      defaultValue={user.nameChange}
                      readOnly={user.readonly}
                      autoComplete="off"
                    />  
                  </td>
                  <td>
                    <input 
                      type="text" 
                      className={user.readonly ? "" : "hide"}
                      name="ageChange"
                      value={user.ageChange}
                      readOnly
                    />
                    <select 
                      className={user.readonly ? "hide" : ""} name="ageChange"
                      onChange={this.handleInputChange}
                      defaultValue={user.ageChange}
                    >
                      <option>Age</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                      <option value="24">24</option>
                      <option value="25">25</option>
                      <option value="26">26</option>
                      <option value="27">27</option>
                      <option value="28">28</option>
                      <option value="29">29</option>
                      <option value="30">30</option>
                      <option value="31">31</option>
                      <option value="32">32</option>
                      <option value="33">33</option>
                      <option value="34">34</option>
                      <option value="35">35</option>
                      <option value="36">36</option>
                      <option value="37">37</option>
                      <option value="38">38</option>
                      <option value="39">39</option>
                      <option value="40">40</option>
                    </select>
                  </td>
                  <td>
                    <input 
                      type="text" 
                      name="nicknameChange"
                      onChange={this.handleInputChange}
                      defaultValue={user.nicknameChange}
                      readOnly={user.readonly}
                      autoComplete="off"
                      />                  
                  </td>
                  <td>
                    <input type="button" className="btn-edit" value="Edit" onClick={() => this.editClick(index)}/>
                    <input type="button" className="btn-del" onClick={() => this.deleteUser(user)} value="Delete" />
                  </td>
                </tr>
              )}
              {this.state.newUser && this.addUser()}
              {this.state.activeAdd && this.addRow()}
            </tbody>
          </table>
          <input type="button" className="btn-add" onClick={this.handleClick} value="ADD" />
        </div>
      </div>
    );
  }
}
export default App;
