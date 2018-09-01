const faker = require('faker');

const generateData = (quantity) => {
  const listings = [];
  for(let i = 0; i < quantity; i++) {
    const listingType = faker.random.arrayElement(['House', 'Apartment', 'Condo', 'Townhouse', 'Cave']);
    const roomType = faker.random.arrayElement(['Guest Suite', 'Entire Home', 'Sofa'])
    const listing = {
      unitName: faker.company.catchPhraseAdjective() + ' ' + roomType + ' in a ' + faker.company.catchPhraseDescriptor() + ' ' + listingType,
      unitImage: `https://s3.us-east-2.amazonaws.com/bnbsearch/images/${faker.random.number({ min: 1, max: 100 })}.jpg`,
      hostId: faker.random.number(),
      hostName: faker.name.firstName(),
      hostIcon: faker.image.avatar(),
      isSuperhost: faker.random.boolean(),
      unitAddress: faker.address.streetAddress(),
      neighborhood_cleansed: faker.address.city(),
      city: faker.address.city(),
      state: faker.address.stateAbbr(),
      country_code: faker.address.countryCode(),
      property_type: listingType,
      room_type: roomType,
      bedrooms: faker.random.number({ min: 1, max: 5}),
      beds: faker.random.number({ min: 1, max: 5}),
      baths: faker.random.number({ min: 1, max: 5}),
      guests: faker.random.number({ min: 1, max: 5}),
      unitPrice: `$${faker.random.number({ min: 70, max: 500 })}`,
      priceModifier: faker.random.arrayElement(['per night', 'per week', 'per month', 'per hour']),
      freeCancellation: faker.random.boolean(),
      description_short: faker.lorem.paragraph(),
      description_long: faker.lorem.paragraph(),
      amenities: faker.lorem.sentence(),
      house_rules: faker.lorem.sentence(),
      cancellation_policy: faker.random.boolean()

    }
    listings.push(listing);
  }
  return listings;
};

module.exports.generateData = generateData;