/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CapsuleProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Capsule extends SvelteComponentTyped<
  CapsuleProps,
  {},
  { default: {} }
> {}
