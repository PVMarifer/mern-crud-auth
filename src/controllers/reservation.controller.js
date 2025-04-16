import { json } from "express";
import Task from "../models/reservation.model.js";

export const getReservation = async (req, res) => {
   const reservation = await Task.reservation({})
   res.json(reservation)
};

export const createReservation = async (req, res) => {
    const {title, description, date}= req.body;

    const newReservation = new Task({
        title,
        description,
        date,
        user: req.user.id
    });

    const savedReservation = await newTask.save()
    res.json(savedReservation);
};

export const getReservations = async (req, res) => {
   const reservation = await reservation.findById(req.params.id);
    if(!reservation) return res.status(400).json({message: 'Reservacion no encontrada'})
    res.json(reservation);
}


export const deleteReservartion = async (req, res) => {
    const reservation = await reservation.findByIdAndDelete(req.params.id)
    if (!reservation) return res.status(404).json({message: 'Reservacion no encontrada'});
    res.json(reservation)
};

export const updateReservation = async (req, res) => {
    const reservation = await reservation.findByIdAndUpdate(req.params.id, req.body,{
        new: reservation,
    });
    if (!reservation) return res.status(404),json({message: 'Reservacion no encontrada'})
    res.json(reservation)
}
