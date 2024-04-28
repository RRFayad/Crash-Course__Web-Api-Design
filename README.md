# Crash Course: Web Api Design

[Playlist](https://www.youtube.com/watch?v=hkXzsB8D_mo&list=PLP_rkG1reBjrCKy2Pb1bvjJKbKfantijk)

## Request - Response API's: REST vs RPC vs GraphQL API - How do I pick the right API paradigm?

- Essencially, API's can be categorized into request / response APIs or Event Driven APIs

- There are 3 commonly used standards for Req/Res API's:

  - REST: Representational State Transfer
  - RPC: Remote Procedure Call
  - GraphQL

### Rest APIs

    - CRUD operations are set with the respective HTTP methods, and nowadays REST APIs usually return JSON

    - name the resources using nouns (/users)
        - to access an entity we usually have a entity specifiers (/users/user-1)

    - to represent relationships usually have a entity, the resouce and the entity specifiers (/users/user-1/orders/order-1)

    - non-CRUD operations, such as:
        - Archive (usually a flag in the body)
        - Deactivate (sometimes a verb in the resource)
        - Search (usually query parameters)

    - Benefits
        - Standard method namos
        - Uses HTTP features
        - Easy to maintain

    - Disadvantages
        - Big payloads
            - Sometimes it will retrive the entire resource when I only need to find one entity
        - Multiple HTTP roundtrips
            - To get a resource and a subresource I have to make a request, wait, and do the 2nd request

#### Conclusion:

- Best for APIs the are meant to store and retrieve data only

### RPC APIs

    - Characteristics:
        - Action Oriented: usually has endpoits for each action - Slack uses it (api/chat.postMessage, api/chat.scheduleMessage etc)
        - HTTP methods are mainly GET and POST

    - Benefits:
        - Easy to understand
        - Lightweight payloads
        - High Performance

    - Drawbacks:
        - Discovery is difficult
        - Limited standardization
        - Leads to function explosion
        - All of the items go towards the low structure of this kind of API

#### Conclusion:

- Best for APIs exposing specific actions rather than crud-like operations

### GraphQL APIs

    - Characteristics:
        - query language for APIs developed from facebook
        - Normally only POST and GET
        - The Payload is a query with the specific data to be retrieved

    - Benefits:
        - Saves multiple round trips (as the client make the specific request)
        - Avoids versioning
            - As the logic changes from the query, it's easier to deprecate and keep in production the same API when changes are made
        - Smaller payload size

    - Drawbacks:
        - Added complexity
        - Optimizing performance is difficult
        - Too complicated for a simple API

#### Conclusion:

    - It makes sense only when the quering flexibility is needed
