import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainShellComponent } from 'src/app/layout/fragments/main-shell/main-shell.component';
import { MessageBrokerOverviewComponent } from './message-broker-overview/message-broker-overview.component';
import { RabbitmqComponent } from './rabbitmq/rabbitmq.component';
import { KafkaComponent } from './kafka/kafka.component';

const messageBrokerRoutes: Routes = [
  {
    path: '',
    component: MainShellComponent,
    children: [
      {
        path: 'overview',
        component: MessageBrokerOverviewComponent
      },
      {
        path: 'rabbitmq',
        component: RabbitmqComponent
      },
      {
        path: 'kafka',
        component: KafkaComponent
      },
    ]
  }]

@NgModule({
  imports: [RouterModule.forChild(messageBrokerRoutes)],
  exports: [RouterModule]
})
export class MessageBrokerRoutingModule { }
