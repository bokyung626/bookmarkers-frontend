declare module "user" {
  export interface User {
    id: string;
    email: string;
    nickname: string;
    profileImage: string | undefined;
  }
}
