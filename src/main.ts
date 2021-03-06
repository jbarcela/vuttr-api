import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SharedModule } from './modules/shared/shared.module';
import { ConfigService } from './modules/shared/services/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.select(SharedModule).get(ConfigService);

  const port = configService.getNumber('PORT');
  await app.listen(port);
}
bootstrap();
