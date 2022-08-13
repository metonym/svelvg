/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface VirusProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Virus extends SvelteComponentTyped<
  VirusProps,
  {},
  { default: {} }
> {}
