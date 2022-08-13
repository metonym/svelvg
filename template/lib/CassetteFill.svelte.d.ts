/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CassetteFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CassetteFill extends SvelteComponentTyped<
  CassetteFillProps,
  {},
  { default: {} }
> {}
