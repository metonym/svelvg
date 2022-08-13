/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TicketFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class TicketFill extends SvelteComponentTyped<
  TicketFillProps,
  {},
  { default: {} }
> {}
