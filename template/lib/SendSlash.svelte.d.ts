/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SendSlashProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class SendSlash extends SvelteComponentTyped<
  SendSlashProps,
  {},
  { default: {} }
> {}
