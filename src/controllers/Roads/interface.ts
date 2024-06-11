import { ObjectId } from "mongodb";

export interface Road {
    _id?: string;
    title: string;
    easyDescription: string;
    fullDescription: string;
    activities: RoadActivity[];
}

export interface RoadActivity {
    _id?: string;
    title: string;
}