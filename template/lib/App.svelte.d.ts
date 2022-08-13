/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AppProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class App extends SvelteComponentTyped<
  AppProps,
  {},
  { default: {} }
> {}
