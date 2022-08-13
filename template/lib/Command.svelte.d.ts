/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CommandProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Command extends SvelteComponentTyped<
  CommandProps,
  {},
  { default: {} }
> {}
