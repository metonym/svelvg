/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HospitalFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class HospitalFill extends SvelteComponentTyped<
  HospitalFillProps,
  {},
  { default: {} }
> {}
