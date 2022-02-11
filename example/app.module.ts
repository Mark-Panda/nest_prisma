
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { DummyModule } from './dummy/dummy.module';
import { UserModule } from './user/user.module';

@Module({
    imports: [
        UserModule,
        DummyModule,
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            installSubscriptionHandlers: true,
            playground: true,
            autoSchemaFile: '~schema.gql',
        }),
    ],
  })
export class AppModule {}
