/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface UbuntuProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Ubuntu extends SvelteComponentTyped<
  UbuntuProps,
  {},
  { default: {} }
> {}
