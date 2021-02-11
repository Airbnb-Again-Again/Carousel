Air Carousel (Housing Carousel)
Carousel-again-again Alex Kim


<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
     <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Completely scaled up a photo carousel to handle 3000 requests per second with a <1% error rate. This project used multiple node/express servers and a couple Cassandra databases utilizing AWS EC2 to accomplish it's fast read and write operations.


### Built With

* [Node](https://nodejs.org/en/)
* [CassandraDB](https://cassandra.apache.org/)
* [Express](https://expressjs.com/)
* [React](https://reactjs.org/)
* [Axios](https://www.npmjs.com/package/axios)
* [Styled-Components](https://styled-components.com/)
* [Nginx](https://www.nginx.com/)


<!-- USAGE EXAMPLES -->
## Usage

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




<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Alex Kim - alexkim612@gmail.com

Project Link: [https://github.com/alexkim612/Airbnb-Again-Again/Carousel](https://github.com/Airbnb-Again-Again/Carousel)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* Kevin Lonergan
* [New Relic](https://newrelic.com/)
* [K6](https://k6.io/)
* [Faker](https://github.com/marak/Faker.js/)

