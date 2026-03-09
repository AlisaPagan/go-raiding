import api from "./api";

export type Raid = {
  id: string;
};
export type GetRaidsParams = Record<string, string | number | boolean | undefined>;

export type GetRaidsResponse = Raid[];

export async function getRaids(params?: GetRaidsParams): Promise<GetRaidsResponse> {
  const { data } = await api.get<GetRaidsResponse>("/raids", { params });
  return data;
}

export async function getRaidById(id: string): Promise<Raid> {
  const { data } = await api.get<Raid>(`/raids/${id}`);
  return data;
}
