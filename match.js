const axios = require("axios");
require("./config/config");
const fs = require("fs");
const { stringify } = require("./lib/stringify");

const search_business_by_match = async (
  name,
  address1,
  city,
  state,
  country
) => {
  const config = {
    headers: { Authorization: `Bearer ${process.env["API_KEY"]}` },
    params: {
      name: `${name}`,
      address1: `${address1}`,
      city: `${city}`,
      state: `${state}`,
      country: `${country}`
    }
  };

  const response = await axios.get(
    `https://api.yelp.com/v3/businesses/matches`,
    config
  );

  const business = JSON.parse(JSON.stringify(response.data));
  return business;
};

search_business_by_match(
  "Caffe Vita",
  "1005 E Pike St",
  "Seattle",
  "WA",
  "US"
).then(business => {
  console.log(`Found: ${business.businesses[0].alias}`);
});
