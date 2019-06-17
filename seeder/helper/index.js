const { ObjectId } = require("mongodb");
const { createHash } = require("crypto");

const names = ["John", "Joanne", "Bob", "Will", "Chris", "Tom", "Angel"];
const rooms = [
  "Cat",
  "React",
  "Javascript",
  "Hello",
  "Reddot",
  "Testing",
  "Omen"
];

const getObjectId = name => {
  const hash = createHash("sha1")
    .update(name, "utf8")
    .digest("hex");
  return new ObjectId(hash.substring(0, 24));
};

const getRandomIds = (arr, name = null) => {
  const filteredArr = arr.filter(n => n !== name);
  // Shuffle array
  const shuffled = filteredArr.sort(() => 0.5 - Math.random());

  // Get sub-array of first n elements after shuffled
  return getObjectIds(
    shuffled.slice(0, Math.floor(Math.random() * filteredArr.length))
  );
};

const getRandomId = arr => {
  return getObjectId(arr[Math.floor(Math.random() * arr.length)]);
};

const getObjectIds = names => {
  return names.map(name => getObjectId(name));
};

module.exports = {
  getObjectId,
  getObjectIds,
  names,
  rooms,
  getRandomId,
  getRandomIds
};
