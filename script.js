const mongoose=require("mongoose")
const User = require("./User")

mongoose.connect("mongodb://localhost/testdb")


//1- Create a new user record
//const newUser = new User({
//  name: 'Alice Smith',
 // age: 28,
 // favoriteFoods: ['sushi', 'chocolate']
//});

// Save the user record to the database
//newUser.save(function(err, data) {
//  if (err) {
  //  console.error(err);
 // } else {
//    console.log('New user created:', data);
 // }
//});
 
// 2-Create multiple user records using model.create
User.create([
    {
      name: 'Bob Smith',
      age: 32,
      favoriteFoods: ['pizza', 'ice cream']
    },
    {
      name: 'Charlie Brown',
      age: 25,
      favoriteFoods: ['tacos', 'burritos']
    },
    {
      name: 'Eve Wilson',
      age: 38,
      favoriteFoods: ['steak', 'wine']
    }
  ], function(err, data) {
    if (err) {
      console.error(err);
    } else {
      console.log('Multiple users created:', data);
    }
  }); 
// Search for all users with a given name
User.find({ name: 'Eve Wilson' }, function(err, data) {
    if (err) {
      console.error(err);
    } else {
      console.log('Users with name "Alice Smith":', data);
    }
  });
// Find one user with a given favorite food
User.findOne({ favoriteFoods: 'pizza' }, function(err, data) {
    if (err) {
      console.error(err);
    } else {
      console.log('User with "pizza" in their favorite foods:', data);
    }
  });
  //"63f66011608307b4c252680a"
  // Delete a user by ID
User.findByIdAndDelete("63f66011608307b4c252680a", function(err, data) {
    if (err) {
      console.error(err);
    } else {
      console.log('Deleted user:', data);
    }
  });
  // Delete all users with name "Mary"
User.deleteMany({ name: 'Mary' }, function(err, data) {
    if (err) {
      console.error(err);
    } else {
      console.log('Deleted users:', data);
    }
  });
 
  // Find users who like burritos, sort by name, limit to 2, and hide their age
User.find({ favoriteFoods: 'burritos' })
.sort({ name: 1 })
.limit(2)
.select('-age')
.exec(function(err, data) {
  if (err) {
    console.error(err);
  } else {
    console.log('Users who like burritos:', data);
  }
});