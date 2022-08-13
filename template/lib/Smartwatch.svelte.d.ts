/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SmartwatchProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Smartwatch extends SvelteComponentTyped<
  SmartwatchProps,
  {},
  { default: {} }
> {}
