/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface LinkProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Link extends SvelteComponentTyped<
  LinkProps,
  {},
  { default: {} }
> {}
