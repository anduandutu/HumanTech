import axios from "axios";
import { BASE_URL } from "../constants/Constants";

class UserService {
  getUserList = () => {
    return axios.get(BASE_URL + "getUserList");
  };
}
export default new UserService();
