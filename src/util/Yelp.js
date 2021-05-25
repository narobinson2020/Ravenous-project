const apiKey = 'doymx5YiguvCN9BImPf4Xc091ls3ufBJAIS9GM75X8mLBkAiTF_mX-mLVUy4pzxNywlrPuXdv9AHwFj-n9W8DN4K0hV3dED7HnAvjVHm4Bgbr4meI23YLshXcyStYHYx';

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
