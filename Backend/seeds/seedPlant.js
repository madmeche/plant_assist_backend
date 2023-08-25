const Models = require("../models");

const data = [
  {
    name: "Bougainvillea",
    description: "flowering, woody vine-like shrub",
    image: "",
    type: "shrub",
    sunExposure: ["full sun"],
    season: ["Fall"],
    moistureLevel: "dry",
    zone: ["9","10","11"],
    indoor:"false",
    outdoor: "true",
    toxic: "false",
    width: 40,
    height: 20,
    flowering: "true",
  },
  {
    name: "Sunshine Ligustrum",
    description: "Evergreen shrub with year round golden foliage",
    image: "",
    type: "shrub",
    sunExposure: ["6-12", "full sun"],
    season: ["spring", "fall"],
    moistureLevel: "moist",
    zone: ["5", "6", "7", "8", "9", "10"],
    indoor: "false",
    outdoor: "true",
    toxic: "true",
    width: 10,
    height: 15,
    flowering: "false",
  },
  {
    name: "Magnolia",
    description: "evergreen leaves with seasonal blooming",
    image: "",
    type: "tree",
    sunExposure:[ "full sun"],
    season: ["summer"],
    moistureLevel: "damp",
    zone: ["7", "8", "9", "10"],
    indoor: "false",
    outdoor: "true",
    toxic: "false",
    width: 40,
    height: 80,
    flowering: "true",
  },
  // {
  //   name: "",
  //   description: "",
  //   image: "",
  //   type: "",
  //   sunExposure: "",
  //   season: "",
  //   moistureLevel: "",
  //   zone: "",
  //   indoor: "",
  //   outdoor: "",
  //   toxic: "",
  //   width: "",
  //   height: "",
  //   flowering: "",
  // },
  // {
  //   name: "",
  //   description: "",
  //   image: "",
  //   type: "",
  //   sunExposure: "",
  //   season: "",
  //   moistureLevel: "",
  //   zone: "",
  //   indoor: "",
  //   outdoor: "",
  //   toxic: "",
  //   width: "",
  //   height: "",
  //   flowering: "",
  // },
  // {
  //   name: "",
  //   description: "",
  //   image: "",
  //   type: "",
  //   sunExposure: "",
  //   season: "",
  //   moistureLevel: "",
  //   zone: "",
  //   indoor: "",
  //   outdoor: "",
  //   toxic: "",
  //   width: "",
  //   height: "",
  //   flowering: "",
  // },
  // {
  //   name: "",
  //   description: "",
  //   image: "",
  //   type: "",
  //   sunExposure: "",
  //   season: "",
  //   moistureLevel: "",
  //   zone: "",
  //   indoor: "",
  //   outdoor: "",
  //   toxic: "",
  //   width: "",
  //   height: "",
  //   flowering: "",
  // },
  // {
  //   name: "",
  //   description: "",
  //   image: "",
  //   type: "",
  //   sunExposure: "",
  //   season: "",
  //   moistureLevel: "",
  //   zone: "",
  //   indoor: "",
  //   outdoor: "",
  //   toxic: "",
  //   width: "",
  //   height: "",
  //   flowering: "",
  // },
  // {
  //   name: "",
  //   description: "",
  //   image: "",
  //   type: "",
  //   sunExposure: "",
  //   season: "",
  //   moistureLevel: "",
  //   zone: "",
  //   indoor: "",
  //   outdoor: "",
  //   toxic: "",
  //   width: "",
  //   height: "",
  //   flowering: "",
  // },
  // {
  //   name: "",
  //   description: "",
  //   image: "",
  //   type: "",
  //   sunExposure: "",
  //   season: "",
  //   moistureLevel: "",
  //   zone: "",
  //   indoor: "",
  //   outdoor: "",
  //   toxic: "",
  //   width: "",
  //   height: "",
  //   flowering: "",
  // },
];

const seedPlant = async () => {
    // Loop over data, await is important to resolve the promise (I promise you that the findAll method is a promise)
    for await (const element of data) {
      // Check if the user exists in the DB already
      const plant = await Models.Plant.findAll({
        where: {
            name: element.name,
        },
        raw: true,
      })
        .then((data) => {
          // If a user is found the length will be > 1, else 0
          return data;
        })
        .catch((err) => {
          console.log("Error:", err);
          throw err;
        });
  
      // Check if the data returned has a user or not
      if (plant.length === 0) {
        // If no user, add one
        Models.Plant.create(element)
          .then((data) => {
            console.log("Added", element);
          })
          .catch((err) => {
            console.log("Error:", err);
            throw err;
          });
      } else {
        console.log("Plant exists", plant[0].name);
      }
    }
  };
  
  module.exports = {
    seedPlant,
  };