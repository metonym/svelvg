/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DoorOpenProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class DoorOpen extends SvelteComponentTyped<
  DoorOpenProps,
  {},
  { default: {} }
> {}
