/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MetaProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Meta extends SvelteComponentTyped<
  MetaProps,
  {},
  { default: {} }
> {}
