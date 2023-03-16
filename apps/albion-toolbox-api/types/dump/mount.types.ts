import { Slot } from "./common.types";

export interface Mount {
  "@uniquename": string;
  "@itempower": string;
  "@slottype": Slot;
  "@shopcategory": string;
  "@shopsubcategory1": string;
  "@tier": string;
  "@weight": string;
  "@durability": string;
  craftingrequirements: MountCraftingrequirements;
  craftingspelllist?: MountCraftingspelllist;
  mountspelllist?: Mountspelllist;
  "@enchantmentlevel"?: string;
  "@itemvalue"?: string;
  "@descriptionlocatag"?: string;
}