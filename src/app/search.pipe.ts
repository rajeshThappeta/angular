import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(emps: object[], searchTerm: string): any {

    if(searchTerm==undefined)
    {
      return emps;
    }

return emps.filter(x=>x['name'].toLowerCase().indexOf(searchTerm.toLowerCase())!==-1);
  }

}
