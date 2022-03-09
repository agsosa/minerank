/**
 * Decorator for service methods to handle exceptions automatically
 */
import { ServiceError } from "./ServiceError";

export default function ServiceMethod() {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      try {
        return await originalMethod.apply(this, args);
      } catch (err) {
        console.error(err);
        return { error: new ServiceError(err), data: {} as any };
      }
    };

    return descriptor;
  };
}
