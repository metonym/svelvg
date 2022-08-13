/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HeadsetProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Headset extends SvelteComponentTyped<
  HeadsetProps,
  {},
  { default: {} }
> {}
