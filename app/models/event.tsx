import {User} from "@/app/models/user";
import {Resource} from "@/app/models/resource";

export interface Event{
    Id?: number;
    Name: string;
    Director: User;
    Resources: Array<Array<Resource>>;
    Active: boolean;

}