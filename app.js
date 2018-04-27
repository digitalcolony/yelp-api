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
    console.log(response.data);
  } catch (e) {
    throw new Error("Unable to get answer from YELP.");
  }
};

// Using Woodlands Coffee as Example
search_business_by_id("6AFJ3a2-iCaRd04R8fXuCw");
