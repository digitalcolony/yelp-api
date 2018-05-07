const yelp = require("./lib/yelp-api");

// MAY 2018: Avoid using latitude and longitude in search, as it seems to overly restrict results.
// Searching without address1 will often return junk results
const cafe = {
  name: "Starbucks",
  address1: "1912 Pike Pl",
  city: "Seattle",
  state: "WA",
  zip_code: "98101",
  country: "US",
  latitude: "",
  longitude: ""
};

yelp
  .search_business_by_match(
    cafe.name,
    cafe.address1,
    cafe.city,
    cafe.state,
    cafe.zip_code,
    cafe.country,
    cafe.latitude,
    cafe.longitude
  )
  .then(businesses => {
    const num_found = Object.keys(businesses.businesses).length;

    if (num_found === 0) {
      console.log(`Search returned 0 results`);
    } else {
      // Cannot find test case where multiple businesses are returned
      // Even Starbucks 98101 returns just 1 result.
      for (let index of businesses.businesses.keys()) {
        console.log(`Found: ${businesses.businesses[index].id}`);
        console.log(
          `${businesses.businesses[index].name} at ${
            businesses.businesses[index].location.state
          }`
        );
      }
    }
  });
