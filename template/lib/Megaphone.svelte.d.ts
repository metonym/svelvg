/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MegaphoneProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Megaphone extends SvelteComponentTyped<
  MegaphoneProps,
  {},
  { default: {} }
> {}
