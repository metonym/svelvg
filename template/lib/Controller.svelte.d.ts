/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ControllerProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Controller extends SvelteComponentTyped<
  ControllerProps,
  {},
  { default: {} }
> {}
