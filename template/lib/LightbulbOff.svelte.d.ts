/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface LightbulbOffProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class LightbulbOff extends SvelteComponentTyped<
  LightbulbOffProps,
  {},
  { default: {} }
> {}
