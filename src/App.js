import React, {
  Component
} from 'react';
import {
  registerAction,
  loginAction
} from 'redux/action/users.js';
import {
  connect
} from 'react-redux';
import {
  bindActionCreators
} from 'redux';
import Header from "./components/Index/Header.js";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header/>
        </div>
        <div className="App-body">
          <div className="welcome-view">
            <div className="category-nav">
              <div>1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd</div>
            </div>
            <div className="main">
              21adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd
            </div>
            <div className="sidebar">
              31adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd
            </div>
          </div>
        </div>
      </div>
    )
  }
}



export default connect(
  (state) => {
    // 获取状态   state.users  是指 reducer/users.js 文件中导出的 users
    // 可以 `console.log(state);` 查看状态树
    return {
      users: state.users
    }
  },
  (dispatch) => {
    return {
      // 创建action
      registerActions: bindActionCreators(registerAction, dispatch),
      loginActions: bindActionCreators(loginAction, dispatch),
    }
  })(App);