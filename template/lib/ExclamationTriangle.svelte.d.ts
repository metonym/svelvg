/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ExclamationTriangleProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ExclamationTriangle extends SvelteComponentTyped<
  ExclamationTriangleProps,
  {},
  { default: {} }
> {}
