import { axiosAuth } from "../constants/HttpCommon";

class UserService {
  // Retrieves the user list
  getUserList = () => {
    return axiosAuth.get("/getUserList");
  };

  // Used for login
  login = (username: string, passCode: string) => {
    return axiosAuth.get(
      "/login?userName=" + username + "&password=" + passCode
    );
  };

  // Used for user creation
  createHTUser = (createUserRequest: object) => {
    return axiosAuth.post("/createHTUser", createUserRequest);
  };

  // Used for logout
  logout = (username: string, passCode: string) => {
    return axiosAuth.get(
      "/login?userName=" + username + "&password=" + passCode
    );
  };
}
export default new UserService();
