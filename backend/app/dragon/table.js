const pool = require('../../databasePool');
const DragonTraitTable = require('../dragonTrait/table');

class DragonTable {
  static storeDragon(dragon) {
    return new Promise((resolve, reject) => {

      const { birthdate, nickname, generationId } = dragon;

      pool.query(
        `INSERT INTO dragon(birthdate, nickname, "generationId")
        VALUES($1, $2, $3) RETURNING id`,
        [dragon.birthdate, dragon.nickname, dragon.generationId],
        (error, response) => {
          if (error) return reject(error);
  
          const dragonId = response.rows[0].id;

          Promise.all(dragon.traits.map(( {traitType, traitValue}) => {
            return DragonTraitTable.storeDragonTrait({
              dragonId, traitType, traitValue 
            })
          }))
            .then(() => resolve({dragonId}))
            .catch(error => reject(error));
  
          resolve({dragonId});
        }
      )
    })
  }

  static getDragon({ dragonId }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT birthdate, nickname, "generationId" 
        FROM dragon 
        WHERE dragon.id = $1`,
        [dragonId],
        (error, response) => {
          if (error) return reject(error);
          if (response.rowCount.legth === 0) return reject(new Error('no dragon'));
          resolve(response.rows[0]);
        }
      )
    })
  }
}

module.exports = DragonTable;
