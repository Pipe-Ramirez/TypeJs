export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
};

export type User = { username: string; role: ROLES;}

const felipe: User ={
  username: 'PipeR',
  role: ROLES.ADMIN
}
