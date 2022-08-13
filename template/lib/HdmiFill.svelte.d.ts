/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HdmiFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class HdmiFill extends SvelteComponentTyped<
  HdmiFillProps,
  {},
  { default: {} }
> {}
