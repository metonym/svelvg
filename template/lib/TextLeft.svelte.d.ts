/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TextLeftProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class TextLeft extends SvelteComponentTyped<
  TextLeftProps,
  {},
  { default: {} }
> {}
