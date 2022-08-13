/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface KeyProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Key extends SvelteComponentTyped<
  KeyProps,
  {},
  { default: {} }
> {}
