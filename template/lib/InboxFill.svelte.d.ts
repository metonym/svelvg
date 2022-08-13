/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface InboxFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class InboxFill extends SvelteComponentTyped<
  InboxFillProps,
  {},
  { default: {} }
> {}
