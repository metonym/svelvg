/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ConeProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Cone extends SvelteComponentTyped<
  ConeProps,
  {},
  { default: {} }
> {}
