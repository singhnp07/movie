import { instance } from "../../../Services/Axiosservices";

export function UserLoginAPI(datas) {
  return instance.post("/userlogin", datas);
}
