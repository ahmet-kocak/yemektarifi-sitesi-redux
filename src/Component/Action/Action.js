import { ADD,DELETE,ERROR,ADD_DETAİL,ID,LOVE } from '../Types';

export const updateUser=(par)=> ({type:ADD,payload:par})
export const showError=(par)=> ({type:ERROR,payload:par})
export const updateUserDetail=(par)=> ({type:ADD_DETAİL,payload:par})
export const updataUserId=(par)=> ({type:ID,payload:par})
export const recipeLove=(par)=> ({type:LOVE,payload:par})
export const deleteUser=(par)=> ({type:DELETE,payload:par})

