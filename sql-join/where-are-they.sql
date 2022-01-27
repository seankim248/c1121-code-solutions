select
  "line1" as "street",
  "district",
  "c"."name" as "city",
  "co"."name" as "country"
from
  "addresses"
  join "cities" as "c" using ("cityId")
  join "countries" as "co" using ("countryId");
