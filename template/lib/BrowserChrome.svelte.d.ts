/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BrowserChromeProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BrowserChrome extends SvelteComponentTyped<
  BrowserChromeProps,
  {},
  { default: {} }
> {}
