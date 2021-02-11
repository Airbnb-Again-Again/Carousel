Air Carousel
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

[![Product Name Screen Shot][product-screenshot]](https://example.com)

There are many great README templates available on GitHub, however, I didn't find one that really suit my needs so I created this enhanced one. I want to create a README template so amazing that it'll be the last one you ever need -- I think this is it.

Here's why:
* Your time should be focused on creating something amazing. A project that solves a problem and helps others
* You shouldn't be doing the same tasks over and over like creating a README from scratch
* You should element DRY principles to the rest of your life :smile:

Of course, no one template will serve all projects since your needs may be different. So I'll be adding more in the near future. You may also suggest changes by forking this repo and creating a pull request or opening an issue. Thanks to all the people have have contributed to expanding this template!

A list of commonly used resources that I find helpful are listed in the acknowledgements.

### Built With

This section should list any major frameworks that you built your project using. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.
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

