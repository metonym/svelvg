/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ExcludeProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Exclude extends SvelteComponentTyped<
  ExcludeProps,
  {},
  { default: {} }
> {}
