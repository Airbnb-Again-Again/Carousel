SDC

Air Carousel Kevin Lonergan ft. 
Carousel-again-again Alex Kim

CRUD

CREATE/POST: `/user/:userId/newlisting` -- create new listing  
request body:  
```
{  
   user: INT NOT NULL,  
   title: String NOT NULL,  
   photos: [ { url: String NOT NULL, description: String } ],  
}  
```
response: 'Successfully Created Listing!'  

READ/GET: `/listing/:id/photos` -- get pictures for listing  
request body: 
```
{
  listingId: INT,
}
```
response: 
```
{
  photos: [photo1, photo2, photo3, ...],
}
```

UDPATE/PATCH: `/listing/:id/photo/:photoId` -- update specific picture  
request body:  
```
{
  photoId: INT,
  newurl: String,
}
```
response: 'Successfully Updated Photo!'  

DELETE/DELETE: `/listing/:id` -- delete a listing
request body:  
```
{
  listingId: INT,
}
```
response: 'Successfully Deleted Listing!'

DELETE/DELETE: `/listing/:id/photo/:photoId` -- delete a specific photo  
request body:  
```
{
  photoId: INT,
}
```
response: 'Successfully Deleted Photo!'

