/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PlusCircleFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PlusCircleFill extends SvelteComponentTyped<
  PlusCircleFillProps,
  {},
  { default: {} }
> {}
