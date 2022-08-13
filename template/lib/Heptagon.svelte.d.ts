/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HeptagonProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Heptagon extends SvelteComponentTyped<
  HeptagonProps,
  {},
  { default: {} }
> {}
