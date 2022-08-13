/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SendDashProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class SendDash extends SvelteComponentTyped<
  SendDashProps,
  {},
  { default: {} }
> {}
