/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface VrProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Vr extends SvelteComponentTyped<
  VrProps,
  {},
  { default: {} }
> {}
