/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface InboxProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Inbox extends SvelteComponentTyped<
  InboxProps,
  {},
  { default: {} }
> {}
