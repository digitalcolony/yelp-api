const yelp = require("./lib/yelp-api");

// Using Woodlands Coffee as an Active Business Example
// Using Neptune Coffee as a Closed Business Example
const yelp_ids = ["6AFJ3a2-iCaRd04R8fXuCw", "_hOl9ZqJeT6CvkDN9NaQKw"];

yelp_ids.forEach(id => {
  yelp.search_business_by_id(id).then(business => {
    console.log(`Name: ${business.name}  Closed: ${business.is_closed}`);
    console.log(
      `Reviews: ${business.review_count} average: ${business.rating}`
    );
  });
});
