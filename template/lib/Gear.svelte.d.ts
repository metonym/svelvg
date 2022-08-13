/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface GearProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Gear extends SvelteComponentTyped<
  GearProps,
  {},
  { default: {} }
> {}
