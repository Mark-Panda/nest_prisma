import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());

    await app.listen(3000);
    console.log(`Application is running on: ${await app.getUrl()}`);
    console.log(`服务运行与: http://localhost:3000  || http://localhost:3000/graphql`);
}
void bootstrap();
