/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MicrosoftProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Microsoft extends SvelteComponentTyped<
  MicrosoftProps,
  {},
  { default: {} }
> {}
