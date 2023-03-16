/**
 * Albion Data Internal Types
 */

export enum Tier {
  T1 = 1,
  T2 = 2,
  T3 = 3,
  T4 = 4,
  T5 = 5,
  T6 = 6,
  T7 = 7,
  T8 = 8,
}

export interface AlbionDataShopCategory {
    id: string;
    parentId: string;
}

export interface AlbionDataLabourerContractItem {
    id: string;
    tier: Tier;
    shopCategory: AlbionDataShopCategory[];
    weight: number;
}

export type AlbionDataItem = AlbionDataLabourerContractItem

/**
 * Albion Data Dump Types
 */
