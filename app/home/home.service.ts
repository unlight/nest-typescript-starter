import { Component } from '@nestjs/common';

@Component()
export class HomeService {

    private readonly cats: any[] = [];

    constructor() { }

    findAll(): any[] {
        return this.cats;
    }
}
