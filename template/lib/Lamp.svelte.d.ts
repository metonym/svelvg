/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface LampProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Lamp extends SvelteComponentTyped<
  LampProps,
  {},
  { default: {} }
> {}
