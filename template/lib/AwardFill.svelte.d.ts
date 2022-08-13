/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AwardFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class AwardFill extends SvelteComponentTyped<
  AwardFillProps,
  {},
  { default: {} }
> {}
