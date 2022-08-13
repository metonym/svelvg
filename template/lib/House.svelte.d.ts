/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HouseProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class House extends SvelteComponentTyped<
  HouseProps,
  {},
  { default: {} }
> {}
