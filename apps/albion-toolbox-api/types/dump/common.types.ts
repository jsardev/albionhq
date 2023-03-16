export interface CraftResource {
    "@uniquename":       string;
    "@count":            string;
    "@maxreturnamount"?: string;
}

export interface CraftingRequirements {
  "@time": string;
  "@craftingfocus"?: string;
  craftresource?: CraftResource[] | CraftResource;
  "@gold"?: string;
  "@silver"?: string;
  "@amountcrafted"?: string;
}

export interface LootListItem {
    "@itemname"?:     string;
    "@itemamount"?:   string;
    "@silveramount"?: string;
    "@weight":        string;
    "@itemenchantmentlevel"?: string;
}

export interface LootList {
  loot: LootListItem[] | LootListItem;
}

export enum Slot  {
  Mount = "mount",
}