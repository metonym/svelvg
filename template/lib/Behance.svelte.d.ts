/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BehanceProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Behance extends SvelteComponentTyped<
  BehanceProps,
  {},
  { default: {} }
> {}
