/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface WebcamProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Webcam extends SvelteComponentTyped<
  WebcamProps,
  {},
  { default: {} }
> {}
