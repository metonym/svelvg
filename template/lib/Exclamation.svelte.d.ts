/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ExclamationProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Exclamation extends SvelteComponentTyped<
  ExclamationProps,
  {},
  { default: {} }
> {}
