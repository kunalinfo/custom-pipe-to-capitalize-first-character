import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'TitleCase'
})

export class TitleCasePipe implements PipeTransform {
     transform(value:string, args:string[]) : any {
       return  value.replace(/\w\S*/g, function(str){
             return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
         });

     }
}