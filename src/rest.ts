import {User, ROLES} from './enum';
const currentUser: User = {
  username: 'Felipe',
  role: ROLES.ADMIN,
};

export const checkRole = (...roles:string[])=>{
  if(roles.includes(currentUser.role)){
    return true;
  }
  return false;
}

const result = checkRole(ROLES.ADMIN, ROLES.CUSTOMER, ROLES.SELLER);
console.log(result);

