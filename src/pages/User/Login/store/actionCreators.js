import { CHANGE_USER_INFO } from './constants';
import { CHANGE_LOGIN_STATUS } from './constants';
import { loginByPhoneRequest } from "../../../../api/request";

export const saveUserInfo = data => ({
   // 同步的
   type: CHANGE_USER_INFO,
   data,
});

// api  两个action

export const saveLoginStatus = data => ({
   type: CHANGE_LOGIN_STATUS,
   data,
})
 
export const loginByPhone = (phone, password) => {
   return dispatch => {
      // dispatch(saveUserInfo)
      // api
      loginByPhoneRequest(phone, password)
         .then(res => {
            dispatch(saveUserInfo(true))
            dispatch(saveUserInfo(res.data));
      });
   };
};
