/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CameraVideoOffProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CameraVideoOff extends SvelteComponentTyped<
  CameraVideoOffProps,
  {},
  { default: {} }
> {}
