import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Url } from './url.entity';
import { Repository, EntityManager, DeepPartial } from 'typeorm';

@Injectable()
export class UrlService {

    constructor(
        @InjectRepository(Url) private readonly urlRepository: Repository<Url>,
    ) { }

    async create(url: string) {
        const entity = await this.urlRepository.create({ url } as DeepPartial<Url>);
        return this.urlRepository.save(entity);
    }

    getById(id: number) {
        return this.urlRepository.findOne(id);
    }
}
