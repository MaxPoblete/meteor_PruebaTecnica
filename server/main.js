import { Meteor } from 'meteor/meteor';
import  DoctorsCollection  from '../imports/api/DoctorsCollection';

const insertDoctor = data => DoctorsCollection.insert({
   data
});

Meteor.startup(() => {
  if (DoctorsCollection.find().count() === 0) {
    [].forEach(insertDoctor)
  }
});
