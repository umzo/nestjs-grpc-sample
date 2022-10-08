import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Hero } from './interface/hero.interface'
import { HeroById } from './interface/hero-by-id.interface'
import { Metadata, ServerUnaryCall } from '@grpc/grpc-js'

@Controller()
export class HeroController {
  @GrpcMethod('HeroesService', 'FindOne')
  findOne(data: HeroById, metadata: Metadata, call: ServerUnaryCall<any, any>): Hero {
    const items = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
    ];
    return items.find(({ id }) => id === data.id);
  }
}