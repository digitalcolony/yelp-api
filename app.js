const axios = require("axios");
require("./config/config");

const search_business_by_id = async yelp_id => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${process.env["API_KEY"]}` }
    };
    const response = await axios.get(
      `https://api.yelp.com/v3/businesses/${yelp_id}`,
      config
    );
    const business = JSON.parse(JSON.stringify(response.data));
    return business;
  } catch (e) {
    throw new Error("Unable to get answer from YELP.");
  }
};

// Using Woodlands Coffee as an Active Business Example
// Using Neptune Coffee as a Closed Business Example
const yelp_ids = ["6AFJ3a2-iCaRd04R8fXuCw", "_hOl9ZqJeT6CvkDN9NaQKw"];

yelp_ids.forEach(id => {
  search_business_by_id(id).then(business => {
    console.log(`Name: ${business.name}  Closed: ${business.is_closed}`);
  });
});
