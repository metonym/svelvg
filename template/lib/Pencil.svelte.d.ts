/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PencilProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Pencil extends SvelteComponentTyped<
  PencilProps,
  {},
  { default: {} }
> {}
