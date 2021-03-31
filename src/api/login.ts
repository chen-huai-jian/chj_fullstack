
import { LoginEntity } from './../model/login';
// ts api/ 不需要jsx 
// interface name password 
export const isValidLogin = (loginInfo: LoginEntity): Promise<boolean> => new Promise((resolve) => {
   setTimeout(() => {
      resolve(loginInfo.login === "admin" && loginInfo.password === "test")
   },500)
}) 