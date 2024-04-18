import { Document, Schema, model, models } from "mongoose";

export interface IImage extends Document {
    title: string;
    transformationType: string;
    publicId: string;
    securedUrl: string;
    width?: number;
    height?: number;
    config?: object;
    transformationUrl?: string;
    aspectRatio?: string;
    color?: string;
    prompt?: string;
    author: {
        _id: string;
        firstName: string;
        lastname: string;
    }
    createdAt?: Date;
    updatedAt?: Date;
}



const ImageSchema = new Schema({
    title: {type: String, required: true},
    transformationType: { type:String, required: true },
    publicId:  { type:String, required: true },
    securedUrl:  { type:URL, required: true },
    width: { type: Number },
    height: { type: Number },
    config: { type:Object },
    transformationUrl: { type: URL },
    aspectRation: { type: String },
    color: { type: String },
    prompt: { type: String },
    auth: { type: Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type:Date, default: Date.now },
    updatedAt: { type:Date, default: Date.now },

});

const Image =  models?.Image || model('Imgae',
    ImageSchema);

    export default Image;