'use strict';
const { v4: uuid } = require("uuid");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert("Products", [
        {
          id: uuid(),
          kodebarang: "02.05.030.00.011",
          namabarang: "VERTICAL LIFTING AUGER WELD ",
          image: "",
          image2: "",
          image3: "",
          typebarang: "Spare Part",
          deskripsibarang: "MAXXI Original Spare Parts",
          stockbarang: 15,
          satuanbarang: "pcs",
          price: 1170000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid(),
          kodebarang: "02.00.000.00.00.004",
          namabarang: "MAXXI J AUTOMATIC",
          image: "",
          image2: "",
          image3: "",
          typebarang: "Unit",
          deskripsibarang: "engine 60HP | diesel-automatic | kapasitas lapang efektif 0.71 ha/jam",
          stockbarang: 15,
          satuanbarang: "pcs",
          price: 315000000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
    },
  
    async down(queryInterface, Sequelize) {
      await queryInterface.bulkDelete("Products", null, {});
    },
  };
  
