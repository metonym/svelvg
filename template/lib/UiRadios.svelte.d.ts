/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface UiRadiosProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class UiRadios extends SvelteComponentTyped<
  UiRadiosProps,
  {},
  { default: {} }
> {}
