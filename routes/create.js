const Sequelize=require('sequelize')

const models = require('../models')
async function createUser (req, res) {
    try {
        const user = await models.User.create(req.body)
        res.status(200).json({
            user
        })
    } catch (error) {
        res.status(404),json({error})
    }
}
async function updateUser (req, res, next) {
    try {
        const user = await models.User.update(req.body, {
            where: {
                id: req.params.userId
            }
        })
    } catch (error) {
        next(error)
    }
}
async function getUsers (req, res, next) {
    const users = await models.User.findAll({})
    res.status(200).json({
        users
    })
}
async function getSoftDeletedUsers (req, res, next) {
    const users = await models.User.findAll({
        where:{
            checkDelete:true
        }
    })
    res.status(200).json({
        users
    })
}
async function getRoles (req, res, next) {
    const users = await models.Role.findAll({})
    res.status(200).json({
        users
    })
}
async function getUserDetails (req, res, next) {
    const user = await models.User.findOne({
        where: {
            firstName: req.params.userId
        }
    })
    res.status(200).json({
        user
    })
}
async function deleteUser (req, res, next) {
    const deletedUser = await models.User.destroy({
        where: {
            id: req.params.userId
        }
    })
    res.status(200).json({
        deletedUser
    })
}
async function softDeleteUser(req,res,next){
    const softDeletedUser=await models.User.update({'checkDelete':true},{
    where:{
        id:req.params.userId
    }})
    res.status(200).json({softDeletedUser})
}
async function deleteRole (req, res, next) {
    const deletedRole = await models.Role.destroy({
        where: {
            id: req.params.userId
        }
    })
    res.status(200).json({
        deletedRole
    })
}
async function getQuery(req,res,next){
try{
    const query=await models.User.findAll({
        
        include:[{
            model:models.Role,
          }]
})
    res.status(200).json({
        query
    })
}

catch(error)
{
    next(error)
}

}
async function getProjectDetails(req,res,next){
    try{
        const query=await models.User.findAll({
            
            include:[{
                model:models.Project},
              { model:models.Role}
            ]    
            // }]

             
    })
        res.status(200).json({
            query
        })
    }
    
    catch(error)
    {
        next(error)
    }
    
    }
module.exports = {
    createUser,
    updateUser,
    getUserDetails,
    getUsers,
    deleteUser,
    deleteRole,
    getQuery,
    getRoles,
    getProjectDetails,
    softDeleteUser,
    getSoftDeletedUsers
}