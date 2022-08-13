/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface JournalsProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Journals extends SvelteComponentTyped<
  JournalsProps,
  {},
  { default: {} }
> {}
