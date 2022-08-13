/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HrProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Hr extends SvelteComponentTyped<
  HrProps,
  {},
  { default: {} }
> {}
