/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PlayCircleFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PlayCircleFill extends SvelteComponentTyped<
  PlayCircleFillProps,
  {},
  { default: {} }
> {}
