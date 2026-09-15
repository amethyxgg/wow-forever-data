import type { WoWClass } from "@amethyxgg/wow-forever-data/WoWClass"
import type { CraftedItem } from "@amethyxgg/wow-forever-data/CraftedItem"
import { Realm } from "@amethyxgg/wow-forever-data/Realm"
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
    realm: Realm;
    race?: Race;
    wowclass: WoWClass;
    professions?: CharacterProfessions;
    role?: Role[];
};
