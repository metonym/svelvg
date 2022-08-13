/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface RulersProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Rulers extends SvelteComponentTyped<
  RulersProps,
  {},
  { default: {} }
> {}
