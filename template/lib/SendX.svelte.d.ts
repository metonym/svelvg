/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SendXProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class SendX extends SvelteComponentTyped<
  SendXProps,
  {},
  { default: {} }
> {}
