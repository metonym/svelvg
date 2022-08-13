/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TranslateProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Translate extends SvelteComponentTyped<
  TranslateProps,
  {},
  { default: {} }
> {}
