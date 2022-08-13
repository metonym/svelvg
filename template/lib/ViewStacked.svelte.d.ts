/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ViewStackedProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ViewStacked extends SvelteComponentTyped<
  ViewStackedProps,
  {},
  { default: {} }
> {}
