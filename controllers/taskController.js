require('express-group-routes')
const {response,request} = require('express');
const Conexion = require('../database/ConexionSequelize');
const bcrypt = require('bcrypt');

const allTask=(req ,res = response)=>{
    const conexion= new Conexion()
    conexion.getAllTask()
    .then(data =>{
     
        res.status(200).json({msg:'Listado encontrado',data})
    })
    .catch(err =>{
        console.log(err)
        res.status(200).json({msg:'No se encontraron tareas'})
    })
}

const uniqueTask=(req,res = response)=>{
    const conexion= new Conexion()
    console.log(req.params.id)
    conexion.getTask(req.params.id)
    .then(data=>{
        res.status(200).json({msg:'Tarea encontrada',data})

    })
    .catch(err=>{

        console.log(err)
        res.status(200).json({msg:'No exite una tarea con ese id'})
    })
}

const editTaskStatus=(req,res= response)=>{
    const conexion= new Conexion()
    conexion.updateTaskStatus(req.params.id)
    .then(data=>{
        res.status(202).json('Actualizado correctamente')
    })
    .catch( err => {
        console.log(err);
        res.status(203).json('Error al actualizar')
    });
}

const insertTask=(req,res = response)=>{
    const conexion= new Conexion()
    conexion.insertTask(req.body)
    .then(data=>{
    
        res.status(201).json({msg:'Tarea registrada correctamente'})
    })
    .catch(err=>{
        console.log(err)
        res.status(203).json('Error en el registro')
    })
}

const removeTask=(req,res= response)=>{
    const conexion= new Conexion()
    conexion.deleteTask(req.params.id)
    .then(msg=>{

        res.status(202).json({msg:'Exito en la eliminacion'})
    })
    .catch(err=>{
        console.log(err)
        res.status(203).json({err:'Error en la eliminacion'})
    })
}

module.exports={
    allTask,
    uniqueTask,
    editTaskStatus,
    insertTask,
    removeTask,
  
}