/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SendCheckProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class SendCheck extends SvelteComponentTyped<
  SendCheckProps,
  {},
  { default: {} }
> {}
