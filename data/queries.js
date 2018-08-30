module.exports = {
  createDB : () => {
    return `
      CREATE DATABASE IF NOT EXISTS inventory;

      USE inventory;

      CREATE TABLE IF NOT EXISTS listings(
        id INT(8) UNSIGNED AUTO_INCREMENT,
        unitName              VARCHAR(200) NOT NULL ,
        unitImage             VARCHAR(500) NOT NULL ,
        hostId                INT NOT NULL ,
        hostName              VARCHAR(100) NOT NULL ,
        hostIcon              VARCHAR(500) NOT NULL ,
        isSuperhost           TINYINT(1) ,
        unitAddress           VARCHAR(200) NOT NULL ,
        neighborhood_cleansed VARCHAR(200) NOT NULL ,
        city                  VARCHAR(200) NOT NULL ,
        state                 VARCHAR(50) NOT NULL ,
        country_code          VARCHAR(30) NOT NULL ,
        property_type         VARCHAR(50) NOT NULL ,
        room_type             VARCHAR(50) NOT NULL ,
        bedrooms              TINYINT ,
        baths                 TINYINT ,
        beds                  TINYINT ,
        guests                TINYINT ,
        unitPrice             DECIMAL(7,2) NOT NULL ,
        priceModifier         VARCHAR(30) NOT NULL ,
        freeCancellation      TINYINT(1) ,
        description_short     VARCHAR(1000) NOT NULL ,
        description_long      VARCHAR(8000) NOT NULL ,
        amenities             VARCHAR(1000) NOT NULL ,
        house_rules           VARCHAR(8000) NOT NULL ,
        cancellation_policy   VARCHAR(8000) NOT NULL ,
        PRIMARY KEY (id)
      );
    `
  },
};



  //     CREATE TABLE IF NOT EXISTS listings(
  //      id                    INT(8) NOT NULL AUTO_INCREMENT ,
  //      unitName              VARCHAR(200) NOT NULL ,
  //      unitImage             VARCHAR(500) NOT NULL ,
  //      hostId                INT NOT NULL ,
  //      hostName              VARCHAR(100) NOT NULL ,
  //      hostIcon              VARCHAR(500) NOT NULL ,
  //      isSuperhost           TINYINT(1) ,
  //      unitAddress           VARCHAR(200) NOT NULL ,
  //      neighborhood_cleansed VARCHAR(200) NOT NULL ,
  //      city                  VARCHAR(200) NOT NULL ,
  //      state                 VARCHAR(50) NOT NULL ,
  //      country_code          VARCHAR(30) NOT NULL ,
  //      property_type         VARCHAR(50) NOT NULL ,
  //      room_type             VARCHAR(50) NOT NULL ,
  //      bedrooms              TINYINT NOT NULL ,
  //      beds                  TINYINT NOT NULL ,
  //      guests                TINYINT NOT NULL ,
  //      unitPrice             DECIMAL(7,2) NOT NULL ,
  //      priceModifier         VARCHAR(30) NOT NULL ,
  //      freeCancellation      TINYINT(1) ,
  //      description_short     VARCHAR(1000) NOT NULL ,
  //      description_long      VARCHAR NOT NULL ,
  //      amenities             VARCHAR(1000) NOT NULL ,
  //      house_rules           VARCHAR NOT NULL ,
  //      cancellation_policy   VARCHAR NOT NULL ,

  //       PRIMARY KEY (id)
  //     );  ALTER TABLE listing_review AUTO_INCREMENT = 2912000;
  // `},