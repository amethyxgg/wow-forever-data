import { Rarity } from "@amethyxgg/wow-forever-data/Rarity"
import type { Material } from "@amethyxgg/wow-forever-data/Material"

export type Reagent = Material & { quantity?: number }

export type CraftedItem = {
    spellId?: number
    itemId?: number
    name: string
    icon?: string
    rarity?: Rarity
    type: string
    url?: string
    craftQuantity?: number
    materials: Reagent[]
}
