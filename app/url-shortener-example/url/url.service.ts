import { Component, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Url } from './url.entity';
import { Repository, EntityManager } from 'typeorm';

@Component()
export class UrlService {

    constructor(
        @InjectRepository(Url) private readonly urlRepository: Repository<Url>,
    ) { }

    async create(url: string) {
        const entity = await this.urlRepository.create({ url });
        return this.urlRepository.save(entity);
    }

    getById(id: number) {
        return this.urlRepository.findOne({ _id: id });
    }
}
