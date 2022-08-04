import React,{Component} from "react";
import AddUser from "./component/AddUser";
import Users from "./component/Users";
class App extends Component{

  
  constructor(props) {
    super(props);
  
    this.state = {
      users : [
        {
          id :1,
          name : "Gizem Şener",
          email : "xxx"
        },
        {
          id : 2,
          name : "Aslı Sener",
          email : "mmm"
        }
      ]
    };
    this.deleteUser= this.deleteUser.bind(this);
    this.addUser= this.addUser.bind(this);
  }
  addUser(newUser) {

    let updatedUsers = this.state.users;

    updatedUsers.push(newUser);
    this.setState({
      users: updatedUsers
    });
  }
  deleteUser(id) {
    let updatedUsers = this.state.users;

    updatedUsers = updatedUsers.filter(user => user.id !== id);
    //State Direct Immutable
    this.setState({
      users: updatedUsers
    });
  }


render() {
  return (
    <div className="container">
      <h4>User App</h4>
      <hr />
      <AddUser addUser = {this.addUser} />
      <hr />
      <Users deleteUser={this.deleteUser} users = {this.state.users} />
    </div>
  );
}
}
export default App;
