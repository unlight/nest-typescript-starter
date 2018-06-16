import { Injectable } from '@nestjs/common';
import { find } from 'lodash';

import { Author } from './types';

@Injectable()
export class AuthorsService {
    private readonly authors: Author[] = [
        { id: 1, firstName: 'Tom', lastName: 'Coleman' },
        { id: 2, firstName: 'Sashko', lastName: 'Stubailo' },
        { id: 3, firstName: 'Mikhail', lastName: 'Novikov' },
    ];

    findOneById(id: number): Author | undefined {
        return find(this.authors, { id });
    }
}
