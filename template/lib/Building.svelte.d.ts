/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BuildingProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Building extends SvelteComponentTyped<
  BuildingProps,
  {},
  { default: {} }
> {}
