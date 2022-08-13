/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface VolumeMuteProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class VolumeMute extends SvelteComponentTyped<
  VolumeMuteProps,
  {},
  { default: {} }
> {}
