/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface StarsProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Stars extends SvelteComponentTyped<
  StarsProps,
  {},
  { default: {} }
> {}
