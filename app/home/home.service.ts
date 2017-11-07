import { Component } from '@nestjs/common';

@Component()
export class HomeService {

    private readonly cats: any[] = [];

    findAll(): any[] {
        return this.cats;
    }
}
