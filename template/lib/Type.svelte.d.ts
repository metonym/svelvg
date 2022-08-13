/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TypeProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Type extends SvelteComponentTyped<
  TypeProps,
  {},
  { default: {} }
> {}
