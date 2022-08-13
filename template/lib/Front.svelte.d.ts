/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FrontProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Front extends SvelteComponentTyped<
  FrontProps,
  {},
  { default: {} }
> {}
