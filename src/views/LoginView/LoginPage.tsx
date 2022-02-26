import React from "react";
import { connect } from "react-redux";
import { storeUser } from "../../actions/authentication.actions";
import { FormGroup, InputGroup, Button, Intent } from "@blueprintjs/core";
import { SimpleToaster } from "../../components/common/Toaster";
import { video } from "../../assets/virtually_assisted_education.webm";
import UserService from "../../requestMaker/UserService";
import "./LoginPage.css";

/**
 * Login Page component
 */
class LoginPage extends React.Component {
  //Value setup which prevents state chanfe for async calls
  isComponentMounted = true;
  state = {
    username: "",
    password: "",
    isLoading: false,
    emptyUserName: false,
    emptyPassword: false,
  };

  showNoUsers = () => {
    UserService.getUserList()
      .then((resp: any) => {
        console.log(resp.data);
      })
      .catch((err: any) => {
        console.log(err.data);
      });
  };

  componentDidMount() {
    this.isComponentMounted = true;
  }

  componentWillUnmount() {
    this.isComponentMounted = false;
  }

  render() {
    return (
      <div className="App">
        <div className="videoContainer">
          <video
            className="bgVid"
            autoPlay={true}
            muted={true}
            preload="auto"
            loop
          >
            <source src={video} type="video/webm" />
          </video>
        </div>
      </div>
    );
  }
}

//Redux map of reducer to state
const mapStateToProps = (state: any) => {
  return {
    userReducer: state.userReducer,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    storeUser: (username: string) => dispatch(storeUser(username)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
