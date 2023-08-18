export type Constructor<T = {}> = new (...args: any[]) => T;
export type Props<T extends Constructor<HTMLElement>> = Partial<InstanceType<T> & astroHTML.JSX.IntrinsicAttributes>;

/**
 * Wraps a custom element class with the Astro JSX pragma.
 * The given class will not be touched but instantly returned.
 *
 * @example
 * ```ts
 * // your existing custom element
 * export class FooBar extends HTMLElement {
 *   foo: true;
 * }
 *
 * // wrap the default export to be used with Astro JSX
 * export default withAstro(FooBar);
 * ```
 */
export function withAstro<T extends Constructor<HTMLElement>>(target: T) {
  return target as unknown as new (_props: Props<T>) => T;
}
