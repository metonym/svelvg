/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SendFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class SendFill extends SvelteComponentTyped<
  SendFillProps,
  {},
  { default: {} }
> {}
