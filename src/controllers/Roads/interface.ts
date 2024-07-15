import { ObjectId } from "mongodb";

export interface Road {
    _id?: string;
    title: string;
    easyDescription: string;
    fullDescription: string;
    activities: RoadActivity[];
    img: string;
}

export interface RoadActivity {
    _id?: string;
    title: string;
}