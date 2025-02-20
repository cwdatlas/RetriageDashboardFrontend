import {User} from "@/app/models/user";
import {Resource} from "@/app/models/resource";

export interface Event{
    id?: number;
    name: string;
    director: User;
    resources: Array<Array<Resource>>;
}