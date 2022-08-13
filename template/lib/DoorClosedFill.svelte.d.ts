/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DoorClosedFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class DoorClosedFill extends SvelteComponentTyped<
  DoorClosedFillProps,
  {},
  { default: {} }
> {}
