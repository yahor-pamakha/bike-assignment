import { Pipe, PipeTransform } from '@angular/core';
import { capitalize } from 'lodash';

@Pipe({
  name: 'handlebar',
})
export class HandlebarPipe implements PipeTransform {
  handlebarTypes = [
    {
      slug: 'drop_bar',
      name: 'Drop',
    },
    {
      slug: 'forward',
      name: 'Forward facing',
    },
    {
      slug: 'rearward',
      name: 'Rear facing',
    },
    {
      slug: 'other',
      name: 'Not handlebars',
    },
    {
      slug: 'bmx',
      name: 'BMX style',
    },
    {
      slug: 'flat',
      name: 'Flat or riser',
    },
  ];

  transform(value: any): string {
    if (!value) {
      return '-';
    }
    const resultType = this.handlebarTypes.filter(
      type => typeof value === 'string' && type.slug === value.toLowerCase()
    );
    return resultType.length ? resultType[0].name : capitalize(value);
  }
}
