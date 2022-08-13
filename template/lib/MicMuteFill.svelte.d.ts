/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MicMuteFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class MicMuteFill extends SvelteComponentTyped<
  MicMuteFillProps,
  {},
  { default: {} }
> {}
