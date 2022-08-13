/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CloudSunProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CloudSun extends SvelteComponentTyped<
  CloudSunProps,
  {},
  { default: {} }
> {}
