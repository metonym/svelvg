/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MailboxProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Mailbox extends SvelteComponentTyped<
  MailboxProps,
  {},
  { default: {} }
> {}
