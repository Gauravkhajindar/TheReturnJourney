
## Project - Products Management

### Key points
- In this project we are performing operation on product like product create, update, delete , fetch etc. We work through it's feature. The steps would be:
  1) We create it's model.
  2) We build it's APIs.
  3) We test these APIs.
  4) we write test cases for api.
- Create a database `ProductMangement`. You can clean the db you previously used and resue that.
- Branch name is `project/productsManagementGroupX`
- Follow the naming conventions exactly as instructed.


### Models
- Product Model
```yaml
{ 
  productName: {string, mandatory, unique},
  description: {string, mandatory},
  price: {number, mandatory},
  isDeleted: {boolean},
  createdAt: {timestamp},
  updatedAt: {timestamp}
}
```


## Product APIs 
### POST /api/products
- Create a Product document from request body.
- __Response format__
  - _**On success**_ - Return HTTP status 201. Also return the Product document. The response should be a JSON object like [this](#successful-response-structure)
  - _**On error**_ - Return a suitable error message with a valid HTTP status code. The response should be a JSON object like [this](#error-response-structure)
```yaml
{
    "status": true,
    "message": "product created succefully.",
    "data": {
        "productName": "Puma shirt",
        "description": "its partyware shirt",
        "price": 1500,
        "isDeleted": false,
        "_id": "65891543f15c3f464c21fba6",
        "createdAt": "2023-12-25T05:38:11.962Z",
        "updatedAt": "2023-12-25T05:38:11.962Z",
        "__v": 0
    }
}
 
```

## GET /api/products 
- Returns all products in the collection that aren't deleted.
- Allow to fetch all products with details.
- also Allow query param to search particular product with product name and price.
- __Response format__
  - _**On success**_ - Return HTTP status 200 and returns the product document. The response should be a JSON object like [this](#successful-response-structure)
  - _**On error**_ - Return a suitable error message with a valid HTTP status code. The response should be a JSON object like [this](#error-response-structure)
```yaml
{
    "status": true,
    "message": "product fetch succefully.",
    "data": [
        {
            "_id": "6586d8e85a83adb642be259f",
            "productName": "pepe jeans",
            "description": "its straight fit jeans",
            "price": 1300,
            "isDeleted": false,
            "createdAt": "2023-12-23T12:56:08.948Z",
            "updatedAt": "2023-12-23T12:56:08.948Z",
            "__v": 0
        },
        {
            "_id": "6586e069059a56fee5dcbd72",
            "productName": "puma T shirt",
            "description": "its athlet t shirt",
            "price": 1000,
            "isDeleted": false,
            "createdAt": "2023-12-23T13:28:09.196Z",
            "updatedAt": "2023-12-23T13:28:09.196Z",
            "__v": 0
        },
        {
            "_id": "6586e88963daee170a23e1d7",
            "productName": "puma 19923 shoes",
            "description": "its running shoes",
            "price": 5500,
            "isDeleted": false,
            "createdAt": "2023-12-23T14:02:49.807Z",
            "updatedAt": "2023-12-23T14:02:49.807Z",
            "__v": 0
        },
        {
            "_id": "6586e930a60e69a721d222cd",
            "productName": "redtape  shoes",
            "description": "its running shoes",
            "price": 2500,
            "isDeleted": false,
            "createdAt": "2023-12-23T14:05:36.126Z",
            "updatedAt": "2023-12-23T14:05:36.126Z",
            "__v": 0
        },
        {
            "_id": "6586e95fdf487b843d0e8049",
            "productName": "addidas  shoes",
            "description": "its running shoes",
            "price": 2500,
            "isDeleted": false,
            "createdAt": "2023-12-23T14:06:23.653Z",
            "updatedAt": "2023-12-23T14:06:23.653Z",
            "__v": 0
        },
        {
            "_id": "6586e99631e6763a6dd29158",
            "productName": "shoes",
            "description": "its running shoes",
            "price": 2500,
            "isDeleted": false,
            "createdAt": "2023-12-23T14:07:18.229Z",
            "updatedAt": "2023-12-23T14:07:18.229Z",
            "__v": 0
        },
        {
            "_id": "6586ea1e826ed4a68fd3435e",
            "productName": "U.S.Polo",
            "description": "its t shirt",
            "price": 1500,
            "isDeleted": false,
            "createdAt": "2023-12-23T14:09:34.977Z",
            "updatedAt": "2023-12-23T14:09:34.977Z",
            "__v": 0
        },
        {
            "_id": "6588431bb8ba05d83e142cf7",
            "productName": "566",
            "description": "its running shoes",
            "price": 500,
            "isDeleted": false,
            "createdAt": "2023-12-24T14:41:31.005Z",
            "updatedAt": "2023-12-24T14:41:31.005Z",
            "__v": 0
        },
        {
            "_id": "658887e8d38c6fbf60c025a7",
            "productName": "highlander shirt",
            "description": "its partyware shirt",
            "price": 1100,
            "isDeleted": false,
            "createdAt": "2023-12-24T19:35:04.886Z",
            "updatedAt": "2023-12-24T19:35:04.886Z",
            "__v": 0
        },
        {
            "_id": "65891543f15c3f464c21fba6",
            "productName": "Puma shirt",
            "description": "its partyware shirt",
            "price": 1500,
            "isDeleted": false,
            "createdAt": "2023-12-25T05:38:11.962Z",
            "updatedAt": "2023-12-25T05:38:11.962Z",
            "__v": 0
        }
    ]
}

```

### GET /api/products/:id
- Returns product details by product id
- __Response format__
  - _**On success**_ - Return HTTP status 200. Also return the product documents. The response should be a JSON object like [this](#successful-response-structure)
  - _**On error**_ - Return a suitable error message with a valid HTTP status code. The response should be a JSON object like [this](#error-response-structure)
```yaml
  {
    "status": true,
    "message": "product fetch succefully.",
    "data": {
        "_id": "65891543f15c3f464c21fba6",
        "productName": "Puma shirt",
        "description": "its partyware shirt",
        "price": 1500,
        "isDeleted": false,
        "createdAt": "2023-12-25T05:38:11.962Z",
        "updatedAt": "2023-12-25T05:38:11.962Z",
        "__v": 0
    }
}
```
### PUT /api/products/:id
- Updates a product by changing at least one or all fields
- Check if the productId exists (must have isDeleted false and is present in collection). If it doesn't, return an HTTP status 404 with a response body like [this](#error-response-structure)
- __Response format__
  - _**On success**_ - Return HTTP status 200. Also return the updated product document. The response should be a JSON object like [this](#successful-response-structure)
  - _**On error**_ - Return a suitable error message with a valid HTTP status code. The response should be a JSON object like [this](#error-response-structure)
```yaml
  {
    "status": true,
    "message": "product updated succefully.",
    "data": {
        "_id": "65891543f15c3f464c21fba6",
        "productName": "being human shirt 2",
        "description": "its casual shirt",
        "price": 1500,
        "isDeleted": false,
        "createdAt": "2023-12-25T05:38:11.962Z",
        "updatedAt": "2023-12-25T06:01:44.284Z",
        "__v": 0
    }
}
```
### DELETE /api/products/:id
- Deletes a product by product id if it's not already deleted
- __Response format__
  - _**On success**_ - Return HTTP status 200. The response should be a JSON object like [this](#successful-response-structure)
  - _**On error**_ - Return a suitable error message with a valid HTTP status code. The response should be a JSON object like [this](#error-response-structure)
```yaml
{
    "status": true,
    "message": "product deleted succefully.",
    "data": {
        "_id": "6586d7a528cbe0730352e8a1",
        "productName": "being human shirt",
        "description": "its casual shirt",
        "price": 1500,
        "isDeleted": true,
        "createdAt": "2023-12-23T12:50:45.331Z",
        "updatedAt": "2023-12-24T19:39:54.629Z",
        "__v": 0,
        "deletedAt": "2023-12-24T19:39:54.628Z"
    }
}
```

## middleware implementation.

- Create miidleware function that logs the timestamps, HTTP method and request URL for every incoming request to the api.


## Testing 
- write unit tests for atleast two apiendpoint using testing frame work. Ensure that the testcover different scenario including success case and error handeling.


## Response

### Successful Response structure
```yaml
{
  status: true,
  message: 'Success',
  data: {

  }
}
```
### Error Response structure
```yaml
{
  status: false,
  message: ""
}
```
