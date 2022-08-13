/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ViewListProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ViewList extends SvelteComponentTyped<
  ViewListProps,
  {},
  { default: {} }
> {}
