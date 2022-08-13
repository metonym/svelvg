/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface StackProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Stack extends SvelteComponentTyped<
  StackProps,
  {},
  { default: {} }
> {}
