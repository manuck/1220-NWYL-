const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({
  origin: true
})
admin.initializeApp();

// 관리자 권한 부여

exports.addAdminRole = functions.https.onCall((data, context) => {
    //get user and cusstom claim (admin)
    return admin.auth().getUserByEmail(data.email).then(user => {
        return admin.auth().setCustomUserClaims(user.uid, {
            admin: true
        })
    }).then(()=> {
        return {
            message: 'Success! addAdminRole!'
        }
    }).catch(err => {
        return err
    })
}),

// 관리자 권한 박탈

exports.deleteAdminRole = functions.https.onCall((data, context) => {
    return admin.auth().getUserByEmail(data.email).then(user => {
        return admin.auth().setCustomUserClaims(user.uid, {
            admin: false
        })
    }).then(()=> {
        return {
            message: 'Success! deleteAdminRole!'
         }
    }).catch(err => {
        return err
    })
})


// 유저 리스트 

exports.userList = functions.https.onRequest(async (req, res) => {
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

// 유저 삭제 (관리자가 아닌 유저)
exports.deleteUser = functions.https.onCall( (data, context) => {
  return admin.auth().getUserByEmail(data.email).then(user => {
    return admin.auth().deleteUser(user.uid)
  }).then(()=> {
    return {
        message: 'Successfully deleted user'
    }
  }).catch(err => {
    return err
  })
})
