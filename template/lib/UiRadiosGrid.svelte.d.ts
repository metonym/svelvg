/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface UiRadiosGridProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class UiRadiosGrid extends SvelteComponentTyped<
  UiRadiosGridProps,
  {},
  { default: {} }
> {}
