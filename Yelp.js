import theKey from "./APIkey";

const apiKey = `${theKey}`;
const yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, { 
        headers: {
          Authorization: `Bearer ${apiKey}` 
            },
        }).then(response => {
        return response.json();
        }).then(jsonResponse => {
        if (jsonResponse.businesses) {
            return jsonResponse.businesses.map(business => {
                console.log(business);
                 return {
                    id: business.id,
                    imageSrc: business.imageSrc,
                    name: business.name,
                    address: business.address,
                    city: business.city,
                    state: business.state,
                    zipCode: business.zipCode,
                    category: business.category[0].title,
                    rating: business.rating,
                    reviewCount: business.reviewCount
                }
            })
        }
    })
  }
};

export default yelp; 
