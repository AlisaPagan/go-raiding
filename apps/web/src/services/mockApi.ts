import { users } from '../lib/mock/users';
import { characters } from '../lib/mock/characters';
import { raids } from '../lib/mock/raids';

import type { User, Character, Raid } from '../lib/types';

const delay = (ms: number): Promise<void> =>
    new Promise((resolve) => setTimeout(resolve, ms));

const RAIDS_PER_PAGE = 4;

type GetRaidsPageParams = {
    pageParam: number;
};


export const getUsers = async (): Promise<User[]> => {
    await delay(400);
    return users;
};

export const getCharacters = async (): Promise<Character[]> => {
    await delay(400);
    return characters;
};

export const getRaids = async (): Promise<Raid[]> => {
    await delay(400);
    return raids;
};

export const getRaidsPage = async ({
    pageParam,
}: GetRaidsPageParams): Promise<Raid[]> => {
    await delay(400);

    const start = (pageParam - 1) * RAIDS_PER_PAGE;
    const end = start + RAIDS_PER_PAGE;

    return raids.slice(start, end);
};

export const getRaidById = async (id: string): Promise<Raid | undefined> => {
    await delay(400);
    return raids.find((raid) => raid.id === id);
};
