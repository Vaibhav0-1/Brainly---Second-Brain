export const ContentSchema = new Schema({
    title: String,
    link: String,
    tags: [{type: mongoose.Types.ObjectId, ref: 'Tag'}],
    userId: [{type: mongoose.Types.ObjectId, ref: 'User', required: true}]

})