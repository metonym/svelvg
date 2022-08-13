/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface LightbulbFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class LightbulbFill extends SvelteComponentTyped<
  LightbulbFillProps,
  {},
  { default: {} }
> {}
