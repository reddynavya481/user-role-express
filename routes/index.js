const express = require('express');
const router = express.Router();
const {
    createUser,deleteUser,getUserDetails,getUsers,updateUser,getQuery
} = require('./create')
//router.get('/users', getUsers)
router.get('/roles',getQuery)
router.get('/users/:userId', getUserDetails)
router.delete('/users/:userId', deleteUser)
router.post('/users', createUser)
router.put('/users/:userId', updateUser)

module.exports = router;