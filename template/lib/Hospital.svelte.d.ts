/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HospitalProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Hospital extends SvelteComponentTyped<
  HospitalProps,
  {},
  { default: {} }
> {}
