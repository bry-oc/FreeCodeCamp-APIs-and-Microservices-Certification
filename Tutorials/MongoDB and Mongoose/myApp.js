var mongoose = require('mongoose');
var dotenv = require('dotenv').config();

const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String]
});

const Person = mongoose.model('Person', personSchema);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const createAndSavePerson = (done) => {
  const newPerson = new Person({name: 'Bryan', age: 27, favoriteFoods: ["pizza", "chicken nuggets", "hot dogs"]});
  newPerson.save(function(err, data) {
    if (err) {
      return console.error(err);
    }
    done(null, data);    
  });  
};

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function(err, data) {
    if(err) {
      return console.error(err);
    }
    done(null, data);
  });
};

const findPeopleByName = (personName, done) => {
  Person.find({name: personName}, function(err, data) {
    if(err) {
      return console.error(err);
    }
    done(null , data);
  });
};

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods: food}, function(err,data) {
    if(err) {
      return console.error(err);
    }
    done(null, data);
  });
};

const findPersonById = (personId, done) => {
  Person.findById({_id: personId}, function(err, data) {
    if(err){
      return console.error(err);
    }
    done(null , data);
  });
};

const findEditThenSave = (personId, done) => {
  Person.findById({_id: personId}, function(err, data){
    const foodToAdd = "hamburger";
    data.favoriteFoods.push(foodToAdd);
    data.save(function(err, data) {
    if(err){
      return console.error(err);
    }
    done(null, data);
    });
  });
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;
  Person.findOne({name: personName}, function(err, person){
    person.age = ageToSet;
    if(err){
      return console.error(err);
    }
    done(null, person);
  }, { new: true});
};

const removeById = (personId, done) => {
  Person.findByIdAndRemove(personId, function(err, person){
    if(err){
      return console.error(err);
    }
    done(null, person);
  });
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";
  Person.remove({name: nameToRemove}, function(err, person){
    if(err){
      return console.error(err)
    }
    done(null, person);
  });
};

const queryChain = (done) => {
  const foodToSearch = "burrito";
  Person.find({favoriteFoods: foodToSearch}).sort('name').limit(2).select('-age').exec(function(err, person) {
    if(err){
      return console.error(err);
    }
    done(null, person);
  })
};



/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
