/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CardHeadingProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CardHeading extends SvelteComponentTyped<
  CardHeadingProps,
  {},
  { default: {} }
> {}
