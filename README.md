SDC

Air Carousel Kevin Lonergan ft. 
Carousel-again-again Alex Kim

CRUD

CREATE/POST: `/user/:userId/newlisting` -- create new listing  
```
request body:  
{  
   user: INT NOT NULL,  
   title: String NOT NULL,  
   photos: [ { url: String NOT NULL, description: String } ],  
}  
```
```
response: 'Successfully Created Listing!'  
```

READ/GET: `/listing/:listingId/photos` -- get pictures for listing  
```
request body: 
{
  listingId: INT,
}
```
```
response: 
{
  photos: [photo1, photo2, photo3, ...],
}
```

UDPATE/PATCH: `user/:userId/listing/:listingId/photo/:photoId` -- update specific picture 
```
request body:  
{
  photoId: INT,
  newurl: String,
}
```
```
response: 'Successfully Updated Photo!'  
```

DELETE/DELETE: `user/:userId/listing/:listingId` -- delete a listing  
```
request body:  
{
  listingId: INT,
}
```
```
response: 'Successfully Deleted Listing!'
```

DELETE/DELETE: `user/:userId/listing/:listingId/photo/:photoId` -- delete a specific photo  
```
request body:  
{
  photoId: INT,
}
```
```
response: 'Successfully Deleted Photo!'
```

