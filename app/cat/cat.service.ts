import { Component, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Cat } from './cat.entity';

@Component()
export class CatService {

    constructor(
        @Inject('CatRepository') private readonly catRepository: Repository<Cat>
    ) { }

    async findAll(): Promise<Cat[]> {
        return await this.catRepository.find();
    }

    async create(cat: Cat) {
        try {
            return await this.catRepository.save(cat);
        } catch (err) {
            debugger;
        }

    }
}
