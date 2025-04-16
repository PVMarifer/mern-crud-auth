import Review from '../models/review.model.js'

export const getReview = async (req, res) => {
    const review = await Review.find({})
       res.json(review)
};
export const createReview = async (req, res) => {
     const {title, description}= req.body;
    
        const newReview = new Review({
            title,
            description
        });
    
        const savedReview = await newReview.save()
        res.json(savedReview);
};
export const getReviews = async (req, res) => {

    const review = await review.findById(req.params.id)
    if (!review) return res.status(404).json({message: 'Categoria no encontrada'})
    res.json(review)
};
export const deleteReview = async (req, res) => {
    const review = await review.findByIdAndDelete(req.params.id)
    if (!review) return res.status(404).json({message: 'Categoria no encontrada'})
    res.json(review)
};
export const updateReview= async (req, res) => {
    const review = await review.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    if (!review) return res.status(404).json({message:'Categoria no encontrada'})
 res.json(review)
};

