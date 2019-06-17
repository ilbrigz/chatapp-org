const { ObjectId } = require('mongodb');
const {getObjectId, names, rooms, getRandomIds} = require('../../helper');

module.exports = names.map( name => {
  return ({
    _id: getObjectId(name),
    subscribedRooms: [],
    joinedRooms: getRandomIds(rooms),
    favoriteRooms: getRandomIds(rooms,name),
    friends: getRandomIds(names,name),
    firstName: name,
    lastName:`${name}stone`,
    userName: `${name}y`,
    email: `${name}@gmail.com`,
    salt: "12b82d30-9034-11e9-851b-f78f0c341349",
    hashed_password: "0e6d9cb4d3ed0e2e614e058180a8fba20183f865"
  })
}
)

