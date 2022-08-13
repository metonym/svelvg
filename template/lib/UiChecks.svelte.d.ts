/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface UiChecksProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class UiChecks extends SvelteComponentTyped<
  UiChecksProps,
  {},
  { default: {} }
> {}
