/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ExclamationCircleProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ExclamationCircle extends SvelteComponentTyped<
  ExclamationCircleProps,
  {},
  { default: {} }
> {}
