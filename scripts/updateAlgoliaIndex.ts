import { algoliasearch } from "algoliasearch"
import searchIndex from "../public/search-index.json"
require("dotenv").config()

const client = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.ALGOLIA_ADMIN_KEY
)

client.replaceAllObjects({
  indexName: "real_world_testing",
  objects: searchIndex,
})
