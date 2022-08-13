/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MenuAppProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class MenuApp extends SvelteComponentTyped<
  MenuAppProps,
  {},
  { default: {} }
> {}
