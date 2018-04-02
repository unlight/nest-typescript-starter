import { Component } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Url } from './url.entity';
import { Repository, EntityManager } from 'typeorm';

@Component()
export class UrlService {

    constructor(
        private entityManager: EntityManager,
        @InjectRepository(Url) private readonly urlRepository: Repository<Url>,

    ) {
    }

    getById(id: string) {
        return this.urlRepository.findOne(id);
    }

    getAll() {
        return this.urlRepository.find();
    }
}
