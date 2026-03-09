import api from "./api";

export type GetCharactersParams = { search?: string; role?: string; main?: boolean; alt?: boolean };

export type Character = {
  id: string;
  charName: string;
  realm: string;
  iLvl: number;
  role: string;
  class?: string;
  spec?: string;
  main: boolean;
  alt: boolean;
};

export type GetCharactersResponse = Character[];

export async function getCharacters(params?: GetCharactersParams): Promise<GetCharactersResponse> {
  const { data } = await api.get<GetCharactersResponse>("/characters", { params });
  return data;
}

export async function getCharacterById(id: string): Promise<Character> {
  const { data } = await api.get<Character>(`/characters/${id}`);
  return data;
}
