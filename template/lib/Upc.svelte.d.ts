/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface UpcProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Upc extends SvelteComponentTyped<
  UpcProps,
  {},
  { default: {} }
> {}
