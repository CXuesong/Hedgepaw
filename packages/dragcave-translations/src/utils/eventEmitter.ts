import { Events } from "jscorlib";

export function eventEmitterToEventSubscriber<T>(emitter: Events.EventEmitter<T>): (handler: Events.EventHandler<T>) => Disposable {
  return (handler) => emitter.subscribe(handler);
}
