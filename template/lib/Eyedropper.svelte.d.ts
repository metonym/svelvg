/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface EyedropperProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Eyedropper extends SvelteComponentTyped<
  EyedropperProps,
  {},
  { default: {} }
> {}
