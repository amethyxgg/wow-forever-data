import type { Material } from "@amethyxgg/wow-forever-data/Material";
import type { CraftedItem } from "@amethyxgg/wow-forever-data/CraftedItem";
import CopperOre from "@amethyxgg/wow-forever-data/reagents/ore_stone_gems/copper_ore";

import { Rarity } from "@amethyxgg/wow-forever-data/Rarity";

export const CopperBar: CraftedItem = {
    name: "Copper Bar",
    url: "https://www.wowhead.com/forever/item=2840/copper-bar",
    rarity: Rarity.Common,
    itemId: 2840,
    spellId: 2657,
    type: "Crafting Material",
    materials: [
        {
            ...CopperOre,
            quantity: 1
        }
    ],
    craftQuantity: 2
};

export default CopperBar;
