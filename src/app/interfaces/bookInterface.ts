import { Formats } from "./formatsInterface";
import { Persons } from "./personsInterface";
import { Results } from "./resultsInterface";

export interface Books{

    count?:number,
    next?:string,
    previous?:string,
    results?:[],
    id?:number,
    title?:string,
    authors?:{},
    translators?:[],
    subjects?:[],
    bookshelves?:[],
    languages?:[],
    copyright?:boolean,
    media_type?:string,
    formats?:{},
    download_count?:number,
    name?:string,
    birth_year?:number,
    death_year?:number
   


}