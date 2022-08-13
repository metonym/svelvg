/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HurricaneProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Hurricane extends SvelteComponentTyped<
  HurricaneProps,
  {},
  { default: {} }
> {}
