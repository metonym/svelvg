/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CardTextProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CardText extends SvelteComponentTyped<
  CardTextProps,
  {},
  { default: {} }
> {}
