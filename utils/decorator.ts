import { createDecorator } from 'vue-class-component';
import _ from 'lodash';

export const Debounce = (waitMs: number) =>
  createDecorator((options, key) => {
    if (options.methods && options.methods[key]) {
      const originalMethod = options.methods[key];
      const debounceMethod = _.debounce(originalMethod, waitMs, {
        leading: false,
        trailing: true,
      });

      options.methods[key] = async function (...args: any) {
        await debounceMethod.apply(this, args);
      };
    }
  });

export const Throttle = (waitMs: number) =>
  createDecorator((options, key) => {
    if (options.methods && options.methods[key]) {
      const originalMethod = options.methods[key];
      const throttleMethod = _.throttle(originalMethod, waitMs, {
        leading: true,
        trailing: false,
      });

      options.methods[key] = async function (...args: any) {
        await throttleMethod.apply(this, args);
      };
    }
  });
