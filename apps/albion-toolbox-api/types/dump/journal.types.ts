import { CraftingRequirements, LootList } from "./common.types";

export interface DumpItemsJournalItem {
  "@uniquename": string;
  "@tier": string;
  "@shopcategory": string;
  "@shopsubcategory1": string;
  "@weight": string;
  craftingrequirements: CraftingRequirements;
  lootlist: LootList;
}
