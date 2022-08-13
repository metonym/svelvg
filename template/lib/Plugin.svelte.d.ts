/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PluginProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Plugin extends SvelteComponentTyped<
  PluginProps,
  {},
  { default: {} }
> {}
