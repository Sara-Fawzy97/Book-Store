import { Persons } from "./personsInterface";

export interface Results{
    id?:number,
    title?:string,
    authors?:Persons[],
    translators?:Persons[],
    subjects?:[],
    bookshelves?:[],
    languages?:[],
    copyright?:boolean,
    media_type?:string,
    formats?:[],
    download_count?:number,
}