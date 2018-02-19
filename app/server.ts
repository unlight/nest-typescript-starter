require('hot-module-replacement')({ ignore: /node_modues/ });

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { UnauthorizedErrorFilter } from './core/filters/unauthorized-error.filter';
import { config } from './app.config';
// import { RolesGuard } from './core/guards/roles.guard';

import 'loud-rejection/register';

async function main() {
    const app = await NestFactory.create(AppModule);
    app.use(bodyParser.json());
    // app.useGlobalFilters(new UnauthorizedErrorFilter());

    const options = new DocumentBuilder()
        .setTitle('Cats example')
        .setDescription('The cats API description')
        .setVersion('1.0')
        .addTag('cats')
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('/api', app, document);
    await app.listen(config.get('port'));
    if (module.hot) {
        module.hot.accept('./app.module', () => {
            app.close();
            main();
        });
    }

}

main();
