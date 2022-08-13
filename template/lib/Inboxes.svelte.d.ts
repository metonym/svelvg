/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface InboxesProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Inboxes extends SvelteComponentTyped<
  InboxesProps,
  {},
  { default: {} }
> {}
