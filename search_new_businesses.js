const yelp = require("./lib/yelp-api");
const fs = require("fs");

const search = {
  categories: `coffee`,
  location: `98003`
};

yelp
  .search_new_businesses(search.categories, search.location)
  .then(businesses => {
    const num_found = Object.keys(businesses.businesses).length;
    if (num_found === 0) {
      console.log(`Search returned 0 results`);
    } else {
      //fs.writeFile("newcafes.json", JSON.stringify(businesses));
      for (let index of businesses.businesses.keys()) {
        process.stdout.write(
          `[${index + 1}] ${businesses.businesses[index].name}`
        );
        console.log(
          ` ${businesses.businesses[index].location.address1}, ${
            businesses.businesses[index].location.city
          }`
        );
        let yelp_url = businesses.businesses[index].url;
        let yelp_url_array = yelp_url.split("?");
        console.log(` ${yelp_url_array[0]}`);
      }
    }
  });
