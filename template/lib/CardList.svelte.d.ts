/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CardListProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CardList extends SvelteComponentTyped<
  CardListProps,
  {},
  { default: {} }
> {}
