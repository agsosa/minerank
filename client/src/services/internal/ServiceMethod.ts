/**
 * Decorator for service methods to handle exceptions automatically
 */

import { buildServiceError } from "./ServiceError";

export default function ServiceMethod() {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      try {
        return await originalMethod.apply(this, args);
      } catch (err: any) {
        console.error(err, err?.response?.data);
        return { error: buildServiceError(err), data: {} as any };
      }
    };

    return descriptor;
  };
}
