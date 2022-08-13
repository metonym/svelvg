/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DoorOpenFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class DoorOpenFill extends SvelteComponentTyped<
  DoorOpenFillProps,
  {},
  { default: {} }
> {}
