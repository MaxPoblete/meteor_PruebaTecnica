import { Mongo } from 'meteor/mongo';
 
 const DoctorsCollection = new Mongo.Collection('DoctorsCollection');

 export default DoctorsCollection;