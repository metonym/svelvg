/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface LightbulbProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Lightbulb extends SvelteComponentTyped<
  LightbulbProps,
  {},
  { default: {} }
> {}
