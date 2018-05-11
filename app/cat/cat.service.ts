import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Cat } from './cat.entity';
import { CreateCatDto } from './create-cat.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CatService {

    constructor(
        @InjectRepository(Cat) private readonly catRepository: Repository<Cat>,
    ) { }

    async findOneById(id: number) {
        return this.catRepository.findOne(id);
    }

    async findAll(): Promise<Cat[]> {
        return await this.catRepository.find();
    }

    async create(createCatDto: CreateCatDto) {
        const cat = this.catRepository.create(createCatDto);
        await this.catRepository.save(cat);
        return { data: cat.id, message: 'New cat created successfully.' };
    }
}
