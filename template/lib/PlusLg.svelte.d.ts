/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PlusLgProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PlusLg extends SvelteComponentTyped<
  PlusLgProps,
  {},
  { default: {} }
> {}
