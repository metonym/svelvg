/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TicketDetailedProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class TicketDetailed extends SvelteComponentTyped<
  TicketDetailedProps,
  {},
  { default: {} }
> {}
