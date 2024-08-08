import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageBrokerRoutingModule } from './message-broker-routing.module';
import { MessageBrokerOverviewComponent } from './message-broker-overview/message-broker-overview.component';
import { RabbitmqComponent } from './rabbitmq/rabbitmq.component';

@NgModule({
  declarations: [
    MessageBrokerOverviewComponent,
    RabbitmqComponent
  ],
  imports: [
    CommonModule,
    MessageBrokerRoutingModule
  ]
})
export class MessageBrokerModule { }
