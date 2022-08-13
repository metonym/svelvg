/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ToolsProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Tools extends SvelteComponentTyped<
  ToolsProps,
  {},
  { default: {} }
> {}
