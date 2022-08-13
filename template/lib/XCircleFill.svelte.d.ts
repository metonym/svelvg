/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface XCircleFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class XCircleFill extends SvelteComponentTyped<
  XCircleFillProps,
  {},
  { default: {} }
> {}
