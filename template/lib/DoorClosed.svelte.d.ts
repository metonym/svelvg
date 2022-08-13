/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DoorClosedProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class DoorClosed extends SvelteComponentTyped<
  DoorClosedProps,
  {},
  { default: {} }
> {}
