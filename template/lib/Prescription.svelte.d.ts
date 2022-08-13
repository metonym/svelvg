/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PrescriptionProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Prescription extends SvelteComponentTyped<
  PrescriptionProps,
  {},
  { default: {} }
> {}
