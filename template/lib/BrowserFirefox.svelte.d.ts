/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BrowserFirefoxProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BrowserFirefox extends SvelteComponentTyped<
  BrowserFirefoxProps,
  {},
  { default: {} }
> {}
