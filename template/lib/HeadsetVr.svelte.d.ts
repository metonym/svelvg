/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HeadsetVrProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class HeadsetVr extends SvelteComponentTyped<
  HeadsetVrProps,
  {},
  { default: {} }
> {}
