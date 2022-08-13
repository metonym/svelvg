/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CardChecklistProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CardChecklist extends SvelteComponentTyped<
  CardChecklistProps,
  {},
  { default: {} }
> {}
