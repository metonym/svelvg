/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SendPlusProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class SendPlus extends SvelteComponentTyped<
  SendPlusProps,
  {},
  { default: {} }
> {}
