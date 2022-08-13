/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface EmojiFrownProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class EmojiFrown extends SvelteComponentTyped<
  EmojiFrownProps,
  {},
  { default: {} }
> {}
