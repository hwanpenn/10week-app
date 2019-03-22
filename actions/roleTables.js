// import url from '../cfg/cfg.js'

export const APPREDUXTEST = "APPREDUXTEST";
export const APPREDUXCHANGE = "APPREDUXCHANGE";
export const GETREQUEST = "GETREQUEST";
export const GETSUCCESS = "GETSUCCESS";
export const GETFAIL = "GETFAIL";

export function appReduxTest() {
    return {type: APPREDUXTEST}
}
export function appReduxChange() {
    return {type: APPREDUXCHANGE}
}
export function getRole() {
    return {
        types: [GETREQUEST, GETSUCCESS, GETFAIL],
        promise: client => client.get(`http://127.0.0.1:7001/api/role`),
        afterSuccess:(dispatch,getState,response)=>{
            /*请求成功后执行的函数*/
            console.log("请求成功")
            console.log(response)
        },
        // otherData:otherData
    }
}
