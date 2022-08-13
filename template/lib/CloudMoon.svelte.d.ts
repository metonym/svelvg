/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CloudMoonProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CloudMoon extends SvelteComponentTyped<
  CloudMoonProps,
  {},
  { default: {} }
> {}
