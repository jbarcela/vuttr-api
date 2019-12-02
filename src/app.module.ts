import { Module } from '@nestjs/common';
import { SharedModule } from './modules/shared/shared.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from './modules/shared/services/config.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [SharedModule],
      useFactory: (configService: ConfigService) =>
        configService.typeOrmConfig,
      inject: [ConfigService],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
