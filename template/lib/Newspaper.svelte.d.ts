/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface NewspaperProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Newspaper extends SvelteComponentTyped<
  NewspaperProps,
  {},
  { default: {} }
> {}
