/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HypnotizeProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Hypnotize extends SvelteComponentTyped<
  HypnotizeProps,
  {},
  { default: {} }
> {}
