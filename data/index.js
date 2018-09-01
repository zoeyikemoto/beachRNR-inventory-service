const mysql = require('mysql');
const queries = require('./queries');
const Sequelize = require('sequelize');
const datagen = require('./faker/datagen');
// var connection = mysql.createConnection({
//   host: "localhost",
//   user: "beachrnr",
//   password: "giraffe",
//   database: "inventory",
//   multipleStatements: true
// });

const sequelize = new Sequelize('inventory', 'beachrnr', 'giraffe', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to inventory database has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


const Listing = sequelize.define('listing', {
  id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
  },
  unitName: {
    type: Sequelize.STRING
  },
  unitImage: {
    type: Sequelize.STRING
  },
  hostId: {
    type: Sequelize.INTEGER
  },
  hostName: {
    type: Sequelize.STRING
  },
  hostIcon: {
    type: Sequelize.STRING
  },
  isSuperhost: {
    type: Sequelize.TINYINT
  },
  unitAddress: {
    type: Sequelize.STRING
  },
  neighborhood_cleansed: {
    type: Sequelize.STRING
  },
  city: {
    type: Sequelize.STRING
  },
  state: {
    type: Sequelize.STRING
  },
  country_code: {
    type: Sequelize.STRING
  },
  property_type: {
    type: Sequelize.STRING
  },
  room_type: {
    type: Sequelize.STRING
  },
  bedrooms: {
    type: Sequelize.TINYINT
  },
  baths: {
    type: Sequelize.TINYINT
  },
  beds: {
    type: Sequelize.TINYINT
  },
  guests: {
    type: Sequelize.TINYINT
  },
  unitPrice: {
    type: Sequelize.STRING
  },
  priceModifier: {
    type: Sequelize.STRING
  },
  freeCancellation: {
    type: Sequelize.TINYINT
  },
  description_short: {
    type: Sequelize.TEXT
  },
  description_long: {
    type: Sequelize.TEXT
  },
  amenities: {
    type: Sequelize.STRING
  },
  house_rules: {
    type: Sequelize.STRING
  },
  cancellation_policy: {
    type: Sequelize.TEXT
  }
});

module.exports.setUpTable = () => {
  Listing.sync({force: true}).then(() =>
    sequelize.query('ALTER TABLE listings AUTO_INCREMENT = 2912000')).then(() =>
    {
      return Listing.create({
          unitName : 'testing',
          unitImage : 'https://a0.muscache.com/im/pictures/50616050/43df6979_original.jpg',
          hostId : 3062517,
          hostName : 'testing',
          hostIcon : 'https://robohash.org/exsitautem.jpg?size=50x50&set=set1',
          isSuperhost : false,
          unitAddress : 'testing, United States',
          neighborhood_cleansed : 'testing',
          city : 'testing',
          state : 'WA',
          country_code : 'US',
          property_type : 'Condominium',
          room_type : 'Entire Guest Suite',
          bedrooms : 1,
          beds : 1,
          baths : 1,
          guests : 2,
          unitPrice : '70.00',
          priceModifier : 'per night',
          freeCancellation : 1,
          description_short : 'This lovely, modern room and ensuite bath is detached from the main house, so you can enjoy privacy and quiet. We are a 5 min drive from Ballard and a 15 min drive from downtown. Welcome to our quiet, safe neighborhood!',
          description_long : 'For those who would like more privacy than that offered by a room in someone\'s home, this detached bedroom is a perfect choice!\n\nThe bedroom has a queen bed with a memory foam topper. Power strips on both sides of the bed allow for cell phone charging. Wireless internet and cable tv are provided. There is a small, walk-in closet so that you can unpack and feel at home. The full bath has shampoo, conditioner, and liquid soap, as well as plush towels. The windows bring in plenty of light and fresh air in the summer and there is also an air conditioner, and the floors have radiant-floor heating for the winter months.\n\nI have created a small area to enjoy hot beverages and quick meals. There is a mini-fridge, a hot water kettle, and a French press for your convenience. I provide orange juice, a variety of teas, freshly ground coffee, hot chocolate, instant oat packets, granola bars and fruit. I\'ll also bake scones or muffins on one morning of your stay. With dishes and two chairs, you\'ll be able to have a quick breakfast before you head out for the day.\n\nThere is a hair dryer and umbrella to use as well as beach towels. If you need or forgot something, let me know, and I’ll do my best to accomodate you.\n\nThe guest suite is attached to our garage. The garage will not be in use between the hours of 9pm and 9am. However, during the day, family members will occasionally open the garage door, which can be heard from the guest room.\n\nPlease note that there is not a full kitchen or laundry facilities in your guest suite.\n\nOur guest suite is not kid-friendly. Babies and young children are not a good fit for this listing. Ages 12 and older are welcome, as long as your child is part of the 2 person max. Thanks!',
          amenities : 'Wifi',
          house_rules : 'Not safe or suitable for children (0-12 years)',
          cancellation_policy : true
      });
    });
  }

module.exports.setUpTable();

// var findListing = (inputId, cb) => {
//   sequelize.query('SELECT * FROM listings WHERE id = :id', {replacements: { id: inputId } , type: sequelize.QueryTypes.SELECT, model: Listing }).then(listing => {
//     if(listing !== true) {
//       cb()
//     } else {
//      return listing[0].dataValues;
//     }
//   });
// }

module.exports.findListing = (inputId, cb) => {
  Listing.findOne({
    where: {id: inputId},
    plain: true,
  }).then(listing => cb(listing));
};

module.exports.bulkAdd = (quantity, cb) => {
  Listing.bulkCreate(
    datagen.generateData(quantity)
    ).then(newListings => cb(newListings));
};

// var connection = mysql.createConnection({
//   host: "localhost",
//   user: "giraffe",
//   password: "student",
//   database: "inventory",
//   multipleStatements: true
// });


// var connectDB = () => {
//   connection.connect(function(err) {
//     if (err) {
//       console.error('error connecting: ' + err.stack);
//       return;
//     }
//   console.log('connected as id ' + connection.threadId);
//   });
// }

// connectDB();
// connection.query(queries.createDB());

// module.exports.connectDB = connectDB;

// module.exports.createListing = (listing, cb) => {
//     connection.query('INSERT INTO listings SET ?', listing, (err, result, fields) => {
//       err ? cb(err, null) : cb(null, result);
//     });
// };

// module.exports.deleteListing = (listingId, cb) => {
//     connection.query('DELETE FROM listings WHERE id = ?', listingId, (err, result, fields) => {
//       err ? cb(err, null) : cb(null, result);
//     });
// };

// module.exports.fetchListing = (listingId, cb) => {
//     connection.query('SELECT * FROM listings WHERE id = ?', listingId, (err, result, fields) => {
//       err ? cb(err, null) : cb(null, result[0]);
//      });
// };

//module.exports.connection = connection;