/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CloudMoonFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CloudMoonFill extends SvelteComponentTyped<
  CloudMoonFillProps,
  {},
  { default: {} }
> {}
