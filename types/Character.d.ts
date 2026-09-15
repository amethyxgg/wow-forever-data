import type { WoWClass } from "@amethyxgg/wow-forever-data/WoWClass"
import type { CraftedItem } from "@amethyxgg/wow-forever-data/CraftedItem"
import { Role } from "@amethyxgg/wow-forever-data/Role";
import { Race } from "@amethyxgg/wow-forever-data/Race";

// Canonical list of WoW professions
export type WowProfession =
    | "alchemy"
    | "blacksmithing"
    | "enchanting"
    | "engineering"
    | "leatherworking"
    | "tailoring"
    | "skinning"
    | "herbalism"
    | "mining"
    | "cooking"
    | "fishing";

// Per-expansion profession progress can be a simple skill number (backward compatible)
// or an object including the skill and an optional list of crafted items
export type ProfessionProgress = {
    skill: number;
    items?: CraftedItem[];
    cap?: number; // optional per-character cap override
};

// For a character, map profession -> progress
export type CharacterProfessions = Partial<Record<WowProfession, ProfessionProgress>>;

export type Character = {
    name: string;
    ruleset: "normal" | "hardcore" | "pvp" | "roleplay";
    faction?: "alliance" | "horde";
    race?: Race;
    wowclass: WoWClass;
    professions?: CharacterProfessions;
    role?: Role[];
    level?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
        | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20
        | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30
        | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40
        | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50
        | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60;
};
