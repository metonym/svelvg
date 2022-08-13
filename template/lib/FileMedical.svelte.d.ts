/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FileMedicalProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FileMedical extends SvelteComponentTyped<
  FileMedicalProps,
  {},
  { default: {} }
> {}
