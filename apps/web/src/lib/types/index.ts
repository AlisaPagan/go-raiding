export type User = {
    id: string;
    displayName: string;
    avatarUrl?: string;
    mainCharacterId?: string;
};

export type CharacterClass =
    | 'warrior'
    | 'paladin'
    | 'hunter'
    | 'rogue'
    | 'priest'
    | 'death-knight'
    | 'shaman'
    | 'mage'
    | 'warlock'
    | 'monk'
    | 'druid'
    | 'demon-hunter';

export type CharacterRole = 'tank' | 'healer' | 'dps';

export type Region = 'NA' | 'EU' | 'CN';

export type Character = {
    id: string;
    userId: string;
    name: string;
    realm: string;
    class: CharacterClass;
    spec?: string;
    roleHint?: CharacterRole;
    itemLevel: number;
    avatarUrl?: string;
    region: Region;
    isMain: boolean;
};

export type RaidDifficulty = 'normal' | 'heroic' | 'mythic';
export type RaidVisibility = 'public' | 'private-link';
export type RaidStatus = 'open' | 'full' | 'cancelled' | 'completed';

export type RaidSlots = {
    tanksTotal: number;
    healersTotal: number;
    dpsTotal: number;
};

export type Raid = {
    id: string;
    instanceId: string;
    instanceName: string;
    difficulty: RaidDifficulty;
    startsAt: string;
    region: Region;
    minItemLevel: number;
    visibility: RaidVisibility;
    description: string;
    discordLink?: string;
    slots: RaidSlots;
    leaderUserId: string;
    status: RaidStatus;
    createdAt: string;
    updatedAt: string;
};