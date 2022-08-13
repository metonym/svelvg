/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SpellcheckProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Spellcheck extends SvelteComponentTyped<
  SpellcheckProps,
  {},
  { default: {} }
> {}
