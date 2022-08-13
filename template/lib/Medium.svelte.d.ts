/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MediumProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Medium extends SvelteComponentTyped<
  MediumProps,
  {},
  { default: {} }
> {}
