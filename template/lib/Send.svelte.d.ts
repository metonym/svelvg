/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SendProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Send extends SvelteComponentTyped<
  SendProps,
  {},
  { default: {} }
> {}
