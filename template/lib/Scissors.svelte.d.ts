/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ScissorsProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Scissors extends SvelteComponentTyped<
  ScissorsProps,
  {},
  { default: {} }
> {}
