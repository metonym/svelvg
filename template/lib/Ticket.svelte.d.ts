/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TicketProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Ticket extends SvelteComponentTyped<
  TicketProps,
  {},
  { default: {} }
> {}
