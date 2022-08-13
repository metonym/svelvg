/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TicketDetailedFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class TicketDetailedFill extends SvelteComponentTyped<
  TicketDetailedFillProps,
  {},
  { default: {} }
> {}
