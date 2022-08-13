/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CloudDrizzleProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CloudDrizzle extends SvelteComponentTyped<
  CloudDrizzleProps,
  {},
  { default: {} }
> {}
