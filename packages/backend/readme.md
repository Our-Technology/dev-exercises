## Backend Dev Exercise

1. For a given resource (address), look up google place object and populated database record.
1. Index resources in a Typesense index following the provided schema.

#### Relevant information

Database: supabase
Obtain invite for https://supabase.com/dashboard/org/dceyufhymhbhahxdygdd/team

Typesense Index
Obtain invite for https://cloud.typesense.org/clusters/b8tfw47dlkzre3qxp

Typesense schema
You can find the resource schema in the [type definition](../../types/resource.d.ts).

#### Functional Requirements

These are the hard functional requirements. Above behavior is described at a high-level. The following are the "shalls":
- Your code shall run via ts-node CLI and/or combine with edge functions and be able to demonstrate a working version of the requirements being met.
- You shall allow a user to provide a text string for an address.
- You shall refine the meta data about that address and upsert a record into the supabase database.
- You shall include geocoding a location and include the coordinates in the record.
- You shall then upsert a record in the Typesense index if and only if there are geo coordinates for an address.
- You should write some test coverage for your code.

#### Considerations
- See documentation for Supabase
- See documentation for Typesense
- Consider using edge functions to acheive the google place lookup and subsequent search index modification
