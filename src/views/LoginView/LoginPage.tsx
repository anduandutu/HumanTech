import React from "react";
import { connect } from "react-redux";
import { storeUser } from "../../actions/authentication.actions";
import { FormGroup, InputGroup, Button, Intent } from "@blueprintjs/core";
import { SimpleToaster } from "../../components/common/Toaster";
//import { video } from "../../assets/virtually_assisted_education.webm";
import UserService from "../../requestMaker/UserService";
import "./LoginPage.css";
import { REST_UNAUTHORIZED } from "../../constants/Constants";

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

  /**
   * Method to retrieve all users
   */
  showNoUsers = () => {
    UserService.getUserList()
      .then((resp: any) => {
        console.log(resp.data);
      })
      .catch((err: any) => {
        console.log(err.data);
      });
  };

  /**
   * Handles form changes
   * @param e The onChange events of form elements
   */
  handleOnChange = (e: any) => {
    this.setState(() => ({
      [e.target.name]: e.target.value,
    }));
  };

  /**
   * The submit method
   * @param e The submit event
   * @param reconnect Recconection parameter
   */
  handleSubmit = async (e: any, reconnect = false) => {
    e.preventDefault();
    this.setState({ isLoading: true });
    // Form validation
    let validationError = false;
    // Check if the user name is empty
    if (this.state.username === "") {
      this.setState({ isLoading: false, emptyUserName: true });
      validationError = true;
    } else {
      this.setState({ emptyUserName: false });
    }

    // Check if password is empty
    if (this.state.password === "") {
      this.setState({ isLoading: false, emptyPassword: true });
      validationError = true;
    } else {
      this.setState({ emptyUserName: false });
    }

    // If there are not validation errors, fetch the user
    if (!validationError) {
      this.setState({ emptyUserName: false, emptyPassword: false });
      UserService.login(this.state.username, this.state.password)
        .then((response: any) => {
          //this.props.storeUser(this.state.username);
        })
        .catch((error: any) => {
          if (error.response.status === REST_UNAUTHORIZED) {
            SimpleToaster.show({
              message: "Invalid user/password",
              intent: Intent.DANGER,
            });
          } else {
            //Display error message
            console.error("Error during authentication : " + error);
            SimpleToaster.show({
              message: error.message,
              intent: Intent.DANGER,
            });
          }
        })
        .finally(() => {
          if (this.isComponentMounted) {
            this.setState({ isLoading: false });
          }
        });
    }
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
            {/*<source src={video} type="video/webm" />*/}
            <form
              className="form"
              onSubmit={this.handleSubmit}
              id="EduConnect-Login-Form"
            >
              <FormGroup
                label={"Username : "}
                labelFor="username-input"
                helperText={
                  this.state.emptyUserName ? "Username cannot be empty" : null
                }
                intent={this.state.emptyUserName ? Intent.DANGER : Intent.NONE}
              >
                <InputGroup
                  id="username-input"
                  name="username"
                  value={this.state.username}
                  placeholder="Enter your username"
                  onChange={this.handleOnChange}
                  autoComplete="username"
                  large={true}
                ></InputGroup>
              </FormGroup>
              <FormGroup
                label={"Passcode : "}
                labelFor="password-input"
                helperText={
                  this.state.emptyPassword ? "Passcode cannot be empty" : null
                }
                intent={this.state.emptyPassword ? Intent.DANGER : Intent.NONE}
              >
                <InputGroup
                  id="password-input"
                  name="password"
                  value={this.state.password}
                  placeholder="Enter your passcode"
                  onChange={this.handleOnChange}
                  autoComplete="password"
                  large={true}
                ></InputGroup>
              </FormGroup>
              <Button text="Log In">
                type = "submit" fill = {true}
                intent = {Intent.SUCCESS}
                large = {true}
                loading = {this.state.isLoading}
              </Button>
            </form>
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
