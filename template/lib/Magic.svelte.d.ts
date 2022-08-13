/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MagicProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Magic extends SvelteComponentTyped<
  MagicProps,
  {},
  { default: {} }
> {}
