import api from "./api";

export type AuthPayload = {
  email: string;
  password: string;
};

export type User = {
  id: string;
  email: string;
};

//register
export async function signUp(payload: AuthPayload): Promise<User> {
  const response = await api.post<User>("/auth/signup", payload);
  return response.data;
}

//login
export async function logIn(payload: AuthPayload): Promise<User> {
  const response = await api.post<User>("/auth/login", payload);
  return response.data;
}

//logout
export async function logOut(): Promise<void> {
  await api.post("/auth/logout");
}

export async function getMe(): Promise<User> {
  const { data } = await api.get<User>("/auth/me");
  return data;
}
