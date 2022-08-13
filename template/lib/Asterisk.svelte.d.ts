/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AsteriskProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Asterisk extends SvelteComponentTyped<
  AsteriskProps,
  {},
  { default: {} }
> {}
