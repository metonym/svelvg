/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface GenderAmbiguousProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class GenderAmbiguous extends SvelteComponentTyped<
  GenderAmbiguousProps,
  {},
  { default: {} }
> {}
