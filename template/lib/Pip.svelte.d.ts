/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PipProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Pip extends SvelteComponentTyped<
  PipProps,
  {},
  { default: {} }
> {}
