import { Component, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Cat } from './cat.entity';
import { CreateCatDTO } from './create-cat-dto';

@Component()
export class CatService {

    constructor(
        @Inject('CatRepository') private readonly catRepository: Repository<Cat>
    ) { }

    async findAll(): Promise<Cat[]> {
        return await this.catRepository.find();
    }

    async create(createCatDTO: CreateCatDTO) {
        const cat = this.catRepository.create(createCatDTO);
        await this.catRepository.save(cat);
        return { data: cat.id, message: 'New cat created successfully.' };
    }
}
