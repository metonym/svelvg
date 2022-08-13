/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BracesAsteriskProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BracesAsterisk extends SvelteComponentTyped<
  BracesAsteriskProps,
  {},
  { default: {} }
> {}
