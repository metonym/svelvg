/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MicProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Mic extends SvelteComponentTyped<
  MicProps,
  {},
  { default: {} }
> {}
