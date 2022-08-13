/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BackspaceProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Backspace extends SvelteComponentTyped<
  BackspaceProps,
  {},
  { default: {} }
> {}
