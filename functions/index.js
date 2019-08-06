const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({
  origin: true
})
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

// exports.userList = functions.https.onCall((context) => {
//         // List batch of users, 1000 at a time.
//        return admin.auth().listUsers(1000, nextPageToken)
//           .then(function(listUsersResult) {
//             listUsersResult.users.forEach(function(userRecord) {
//               console.log('user', userRecord.toJSON());
//             });
//             if (listUsersResult.pageToken) {
//               // List next batch of users.
//               listAllUsers(listUsersResult.pageToken);
//             }
//           })
//           .then(() => {
//               return {
//                   message : ' Success! call function!!'
//               }
//           })
//           .catch(function(error) {
//             console.log('Error listing users:', error);
//           });
// }) 

exports.userList2 = functions.https.onRequest(async (req, res) => {
  res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH,OPTIONS")
  res.setHeader("Access-Control-Max-Age", "3600")
  res.setHeader("Access-Control-Allow-Headers", "Origin,Accept, authorization, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers")
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Credentials", "true")
  
  let userlist = new Array()
  await admin.auth().listUsers(1000)
    .then(listUsersResult => {
      listUsersResult.users.forEach(userRecord => {
      userlist.push(userRecord.toJSON())
      })
    })
    //const result = JSON.stringify(userlist)
    res.status(200).send(
      {data:userlist}
    )
}) 
