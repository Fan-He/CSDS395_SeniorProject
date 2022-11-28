// importing libaries

import  admin from 'firebase-admin';
import  functions from 'firebase-functions';
import  algoliasearch from 'algoliasearch';


// setting up environment

const ALGOLIA_APP_ID = "ICV2YF7XAB";
const ALGOLIA_ADMIN_KEY = "e9556c6d143292d7492eee790e899b74";
admin.initializeApp(functions.config().firebase);


// Call onCreate to add data to ALgolia Index

export const ideaIndexAdd = functions.firestore
  .document('product/{productId}')
  .onCreate((snap, context) => {
  
    const data = snap.data();
    const objectID = snap.id;
    const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_ADMIN_KEY);
    const index = client.initIndex('Pet_Product');

    // Add the data to the algolia index
    return index.addObject({
      objectID,
      ...data
    });
});