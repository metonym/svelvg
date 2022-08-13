/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface UiChecksGridProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class UiChecksGrid extends SvelteComponentTyped<
  UiChecksGridProps,
  {},
  { default: {} }
> {}
