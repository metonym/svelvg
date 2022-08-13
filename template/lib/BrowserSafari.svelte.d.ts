/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BrowserSafariProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BrowserSafari extends SvelteComponentTyped<
  BrowserSafariProps,
  {},
  { default: {} }
> {}
