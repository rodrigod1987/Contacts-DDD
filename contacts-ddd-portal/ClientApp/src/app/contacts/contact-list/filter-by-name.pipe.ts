import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from 'src/app/shared/model/contact';

@Pipe({ name: 'filterByName'})
export class FilterByName implements PipeTransform {

    transform(contacts: Contact[], descriptionQuery: string) {
        descriptionQuery = descriptionQuery
            .trim()
            .toLowerCase();

        if(descriptionQuery) {
            return contacts.filter(photo =>
                photo.name.toLowerCase().includes(descriptionQuery)
            );
        } else {
            return contacts;
        }
    }

}
