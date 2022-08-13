/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface XboxProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Xbox extends SvelteComponentTyped<
  XboxProps,
  {},
  { default: {} }
> {}
