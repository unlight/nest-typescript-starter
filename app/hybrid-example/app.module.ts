import { Module } from '@nestjs/common';
import { HelloModule } from './hello/hello.module';
import { Service1Module} from './service1/service1.module';
import { Service2Module} from './service2/service2.module';

@Module({
    imports: [HelloModule, Service1Module, Service2Module],
})
export class ApplicationModule {}
