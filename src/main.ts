import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import SwaggerSetup from './config/swagger.config';

const bootstrap = async (): Promise<void> => {
  try {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    SwaggerSetup(app);
    await app.listen(process.env.PORT);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('Error occurred when starting Nest', e);
  }
};

bootstrap();
