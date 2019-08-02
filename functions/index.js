const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.addAdminRole = functions.https.onCall((data, context) => {
    //get user and cusstom claim (admin)
    return admin.auth().getUserByEmail(data.email).then(user => {
        return admin.auth().setCustomUserClaims(user.uid, {
            admin: true
        })
    }).then(()=> {
        return {
            message: 'Success! ${data.email} has been made an admin'
        }
    }).catch(err => {
        return err
    })
}),

/// 유저 리스트 

exports.userList = functions.https.onCall((context) => {
        // List batch of users, 1000 at a time.
       return admin.auth().listUsers(1000, nextPageToken)
          .then(function(listUsersResult) {
            listUsersResult.users.forEach(function(userRecord) {
              console.log('user', userRecord.toJSON());
            });
            if (listUsersResult.pageToken) {
              // List next batch of users.
              listAllUsers(listUsersResult.pageToken);
            }
          })
          .then(() => {
              return {
                  message : ' Success! call function!!'
              }
          })
          .catch(function(error) {
            console.log('Error listing users:', error);
          });
}) 