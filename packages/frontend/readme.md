## Frontend Exercise

1. Using instantsearch client-side components, populate a map with markers from a Typesense index.
1. Scroll through locations in map view plus a radius of your choice in a carousel like fashion.
1. Display details screen for a selected resource displaying basic information.

#### Relevant information

Typesense Index
Obtain access to index @ https://cloud.typesense.org/clusters/b8tfw47dlkzre3qxp

Typesense schema
You can find the resource schema in the [type definition](../../types/resource.d.ts).

#### Functional Requirements

These are the hard functional requirements. Above behavior is described at a high-level. The following are the "shalls":
- Your code shall be implemented in a way that it runs in a mobile web browser and native app simulator using a framework (capacitorjs, expo web, or other similar) 
- You shall display resources by geolocation on a map beginning with your current location (or hardcoded to start in downtown Dallas)
- You shall allow a user to choose a marker from the map and display summary item.
- You shall allow a user to drag the map and redo search in display area.
- You shall allow a user to scroll through visible resources in a carousel. Carousel shall not auto-scroll.
- You shall allow a user to select a resource from the carousel and see a screen with details about the resource expanded.
- You should write some test coverage for your code.

#### Considerations
- See documentation for Typesense for instantsearch and geosearch.
