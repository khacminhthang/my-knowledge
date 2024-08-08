import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageBrokerRoutingModule } from './message-broker-routing.module';
import { MessageBrokerOverviewComponent } from './message-broker-overview/message-broker-overview.component';
import { RabbitmqComponent } from './rabbitmq/rabbitmq.component';
import { KafkaComponent } from './kafka/kafka.component';
import { ShareModule } from '../share/share.module';

@NgModule({
  declarations: [
    MessageBrokerOverviewComponent,
    RabbitmqComponent,
    KafkaComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    MessageBrokerRoutingModule
  ]
})
export class MessageBrokerModule { }
