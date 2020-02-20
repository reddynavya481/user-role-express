const express = require('express');
const router = express.Router();
const {
    createUser,deleteUser,getUserDetails,getUsers,updateUser,getQuery,getProjectDetails,getRoles,deleteRole,softDeleteUser,getSoftDeletedUsers
} = require('./create')
router.get('/users', getUsers)
router.get('/joinRole',getQuery)
router.get('/roles', getRoles)
router.get('/joinprojectDetails',getProjectDetails)
router.get('/users/:userId', getUserDetails)
router.delete('/users/:userId', deleteUser)
router.get('/softDeletedUsers',getSoftDeletedUsers)
router.delete('/delUser/:userId',softDeleteUser)
router.delete('/roles/:userId', deleteRole)
router.post('/users', createUser)
router.put('/users/:userId', updateUser)

module.exports = router;