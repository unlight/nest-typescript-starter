import { Component, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Url } from './url.entity';
import { Repository, EntityManager } from 'typeorm';

@Component()
export class UrlService {

    constructor(
        @InjectRepository(Url) private readonly urlRepository: Repository<Url>,
        @Inject('converter') private readonly converter: Function,
    ) {
    }

    getById(id: string) {
        return this.urlRepository.findOne(id);
    }

    getAll() {
        return this.urlRepository.find();
    }

    save(url: Url) {

        return this.urlRepository.save(url);
    }
}
