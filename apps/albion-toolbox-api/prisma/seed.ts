import got from "got";
import { pick, paths, pipe, concat, filter, isNil, not, reduce } from "rambda";

const ITEMS_DUMP_URL =
  "https://raw.githubusercontent.com/broderickhyman/ao-bin-dumps/master/items.json";

const pickCategoriesToSeed = pipe(
  paths<Record<ItemDumpCategory, ItemDumpItem[]>, ItemDumpItem[]>([
    "simpleitem",
    "farmableitem",
  ]),
  filter(pipe(
    isNil,
    not
  )),
  reduce<ItemDumpItem[], ItemDumpItem[]>(concat<ItemDumpItem>, [])
);

type ItemDumpCategory = 'simpleitem' | 'farmableitem'

interface ItemDumpItem {
    '@uniquename': string
}

/**
 * to handle:
 * shopcategories - separate table
 * hideoutitem - irrelevant
 * farmableitem - 
 */

interface ItemsDumpResponse {
    items: Record<ItemDumpCategory, ItemDumpItem[]>
}

const run = async () => {
  const response = await got.get<ItemsDumpResponse>(ITEMS_DUMP_URL, { responseType: "json" });

  const categories = pickCategoriesToSeed(response.body.items);

  console.log({ categories })
};

run();
