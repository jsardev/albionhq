import { CraftingRequirements } from "./common.types";

export interface DumpItemsFurnitureItem {
  "@uniquename": string;
  "@shopcategory": string;
  "@shopsubcategory1": string;
  "@tier": string;
  "@durability"?: string;
  "@weight": string;
  craftingrequirements?: CraftingRequirements[] | CraftingRequirements;
  "@enchantmentlevel"?: string;
  "@itemvalue"?: string;
  "@namelocatag"?: string;
  "@descriptionlocatag"?: string;
  "@tradable"?: string;
}
