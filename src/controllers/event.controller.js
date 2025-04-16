import Event from '../models/event.model.js'

export const getEvent = async (req, res) => {
    const event = await Event.find({})
       res.json(event)
};
export const createEvent = async (req, res) => {
     const {title, description}= req.body;
    
        const newEvent = new Event({
            title,
            description
        });
    
        const savedEvent = await newEvent.save()
        res.json(savedEvent);
};
export const getEvents = async (req, res) => {

    const event = await event.findById(req.params.id)
    if (!event) return res.status(404).json({message: 'Evento no encontrado'})
    res.json(event)
};
export const deleteEvent = async (req, res) => {
    const event = await event.findByIdAndDelete(req.params.id)
    if (!event) return res.status(404).json({message: 'Evento no encontrado'})
    res.json(event)
};
export const updateEvent= async (req, res) => {
    const event = await event.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    if (!event) return res.status(404).json({message:'Categoria no encontrada'})
 res.json(event)
};

