import { DumpItemsFurnitureItem } from "./furniture.types";
import { DumpItemsJournalItem } from "./journal.types";
import { DumpItemsLabourerContract } from "./labourer-contract.types";

export interface DumpItemsRoot {
    items:  DumpItems;
}

export interface DumpItems {
  shopcategories: Shopcategories;
  // unused: hideoutitem
  farmableitem: Farmableitem[];
  simpleitem: Simpleitem[];
  consumableitem: Consumableitem[];
  consumablefrominventoryitem: Consumablefrominventoryitem[];
  equipmentitem: Equipmentitem[];
  weapon: Weapon[];
  mount: Mount[];
  furnitureitem: DumpItemsFurnitureItem[];
  journalitem: DumpItemsJournalItem[];
  labourercontract: DumpItemsLabourerContract[];
  // unused: mountskin
  // unused: crystalleagueitem
  // unused: killtrophy
}