export interface ILoginState {
  name?: string,
  des?: string,
  phone?: number,
}
export interface ILoginProps {
  username: string,
  password: string,
  phone?: number,
}